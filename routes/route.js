const express = require("express");
const router = express.Router();
const uploadController = require("../controller/controller");
const upload = require("../config/upload");
const { uploadDoc, uploadSjt, uploadCorr } = require("../config/upload");

let routes = (app) => {
  //router.get("/", homeController.getHome);

  router.post("/uploadDoc", uploadDoc.any("file"), uploadController.uploadDocument);
  router.post("/uploadSujet", uploadSjt.any("file"), uploadController.uploadSujet);
  router.post("/uploadCorro", uploadCorr.any("file"), uploadController.uploadCorro);

  return app.use("/", router);
};

module.exports = routes;
