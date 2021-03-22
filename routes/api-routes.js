
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json();
  });

  // app.get("/api/notes", function(req, res) {
  //   res.json(waitListData);
  // });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      notes.push(req.body);
      res.json(true);
    }
    else {
      notes.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
 //clears out the table while working with the functionality.
  

  app.post("/api/notes", function(req, res) {
    // Empty out the arrays of data
    notes.length = 0;
    notes.length = 0;

    res.json({ ok: true });
  });
};
