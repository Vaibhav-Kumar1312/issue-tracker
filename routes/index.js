const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController.js");

router.get("/", homeController.homePage);
router.get("/newProject", homeController.newProject);
router.post("/newProject/create", homeController.createNewProject);
router.get("/projectDetail/:id", homeController.projectDetail);

module.exports = router;
