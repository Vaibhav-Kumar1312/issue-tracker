const Project = require("../models/project.js");
exports.homePage = function homePage(req, res) {
  return res.render("home", { title: "Home" });
};

exports.newProject = async function newProject(req, res) {
  const allProjects = await Project.find({});
  return res.render("createProject", {
    title: "Create New Project",
    allProjects: allProjects,
  });
};

exports.createNewProject = async function createNewProject(req, res) {
  console.log(req.body.name);
  console.log(req.body.description);
  console.log(req.body.author);
  let newProject = await Project.create({
    name: req.body.name,
    description: req.body.description,
    author: req.body.author,
  });

  res.redirect("back");
};

exports.projectDetail = function projectDetail(req, res) {
  console.log(req.params.id);
  console.log(req.params.name);
  return res.redirect("back");
};
