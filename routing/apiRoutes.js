// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on survey responses and friends, etc.
// ===============================================================================

var surveyData = require("../data/surveyData");
var friendsListData = require("../data/friendslistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data from the survey)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(surveyData);
  });

//   app.get("/api/waitlist", function(req, res) {
//     res.json(waitListData);
//   });

  // API POST Requests
  // Below code handles when a user submits a survey and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey request... this data is then sent to the server...
  // Then the server saves the data to the surveyData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // This will be used to handle incomeing survey results.  This route will
    // also be used to handle to compatibility logic. 
    // It will do this by sending out the value "true" if you have a friend
    // req.body is available since we're using the body parsing middleware
    if (surveyData.length < 11) {
      surveyData.push(req.body);
      res.json(true);
    }
    else {
        console.log("Something went wrong: We coldn't find a mathch.  We need tocheck our data and routes");
    //   waitListData.push(req.body);
    //   res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    surveyData.length = 0;
    // waitListData.length = 0;

    res.json({ ok: true });
  });
};
