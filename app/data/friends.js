// ===============================================================================
// DATA
// Below data will hold all of the friends day.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var surveyArray = [
    {
      name: "Sheila Bumbelia",
      photo: "https://publicdomainvectors.org/en/free-clipart/Long-haired-woman-smiling-vector-image/17572.html",
      scores: [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
      ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = surveyArray;
  