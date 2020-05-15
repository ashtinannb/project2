/*Checks for user login and restricts user's directory options until logged in */
module.exports = function(req, res, nextPage) {
  if (req.user) {
    return nextPage();
  }

  else
    return res.redirect("/");
};