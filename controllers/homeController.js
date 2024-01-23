exports.homePage = function homePage(req, res) {
  return res.render("home", { title: "Home" });
};
