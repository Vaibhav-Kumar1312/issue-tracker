const Project = require("../models/project.js");
const Issue = require("../models/issue.js");

exports.homePage = async function homePage(req, res) {
  const allProjects = await Project.find({});
  return res.render("home", { title: "Home", allProjects: allProjects });
};

exports.newProject = async function newProject(req, res) {
  const allProjects = await Project.find({});
  return res.render("createProject", {
    title: "Create New Project",
    allProjects: allProjects,
  });
};

exports.createNewProject = async function createNewProject(req, res) {
  let newProject = await Project.create({
    name: req.body.name,
    description: req.body.description,
    author: req.body.author,
  });

  res.redirect("back");
};

exports.projectDetail = async function projectDetail(req, res) {
  const allProjects = await Project.find({});
  const project = await Project.findById(req.params.id)
    .populate("issues")
    .exec();
  return res.render("projectDetail", {
    title: "Project Detail",
    allProjects: allProjects,
    project: project,
  });
};

exports.newIssue = async function newIssue(req, res) {
  const allProjects = await Project.find({});
  const parentProject = await Project.findById(req.params.id);
  res.render("createIssue", {
    title: "New Issue",
    parentProjectId: req.params.id,
    serverLabels: parentProject.labels,
    allProjects: allProjects,
  });
};

exports.createIssue = async function createIssue(req, res) {
  console.log(req.params.id);
  console.log(req.body);
  const newIssue = await Issue.create({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    label: req.body.checkboxValue,
  });
  const parentProject = await Project.findById(req.params.id);
  req.body.checkboxValue.forEach((item) => {
    if (!parentProject.labels.includes(item)) {
      parentProject.labels.push(item);
    }
  });
  parentProject.issues.push(newIssue);
  parentProject.save();

  return res.redirect("back");
};
