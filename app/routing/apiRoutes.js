
var friends = require("../data/friends");

// ROUTING

module.exports = function (app) {

  // API GET Requests

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // API POST Request

  app.post("/api/friends", function (req, res) {
    console.log(req.body)
    console.log(friends)
    res.json(findBestMatch(friends, req.body))
  });

  // Empty out the arrays of data
  app.post("/api/clear", function (req, res) {
    friends.length = 0;
    res.json({ ok: true });
  });
};

function getDifference(scores1, scores2) {
  var difference = 0;
  for (var i = 0; i < scores1.length; i++) {
    difference = difference + Math.abs(scores1[i] - scores2[i])
  }
  return difference;
}
 
function findBestMatch(potentialMatches, candidate) {
  var bestMatch = {
    difference: getDifference(potentialMatches[0].scores, candidate.scores),
    person: potentialMatches[0]
  };
  for (var i = 0; i < potentialMatches.length; i++) {
    /*
      potentialMatches[i] => The current person object that has the scores, name and photo
      candidate => The candidate person object with scores, name and photo
      getDifference => The function that will return a number representing the total difference between all questions for two people
      bestMatch.difference => The score difference of the currently found best Matching person
      bestMatch.person => The currently found best matching person object with name scores and photo

      1. Get the difference of scores between the current potentialMatch and the candidate, this will be a number
      2. Compare difference of the current potentialMatch to the previous bestMatch difference
      3. If it's less than the previous bestMatch difference, then we've found the new bestMatch, and replace the values
    */

    var currentDifference = getDifference(potentialMatches[i].scores, candidate.scores)
    if (currentDifference < bestMatch.difference) {
      bestMatch.difference = currentDifference;
      bestMatch.person = potentialMatches[i];
    }
  }
  return bestMatch.person;

}
