const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {

    fs.readFile('db/db.json', 'utf8', function (err, data) {
      if (err) {
       console.error(err);
      }

      res.json(JSON.parse(data))
   });
});


app.post('/api/notes', function(req, res){
  let { title, text} = req.body;

  const newNote =  { title: title, text: text, id: uuidv4() }

  //read the file db.json
  fs.readFile('db/db.json', 'utf8', function(err, data){
    if(err){
      console.error(err)
    }
    console.log('get')
 
   let dataArr = JSON.parse(data);
   

    let newArr = [...dataArr, newNote];

   fs.writeFile('db/db.json', JSON.stringify(newArr), function(data){
     console.log(data)
   })

  })
  //we will parse the array
  //add new note obj to array
  //rewite the db.json file with new array
res.json({ok: true})

})


  };
//This will be for the delete portion of the Note Taker
  app.delete("/api/notes/:id", function(req, res) {
    let id = req.params.id

    fs.readFile
    
  });

