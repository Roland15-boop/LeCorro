const fs = require("fs");

const db = require("../models");
const Document = db.Documents;
const Corro = db.Corros;
const Sujet = db.Sujets;

const uploadDocument = async (req, res) => {
  try {
    console.log(req.files[0]);


    if (req.files == undefined) {
      return res.send(`Vous devez selectionner un fichier.`);
    }

    const fileName =  req.files[0].filename;

    Document.create({
      type: req.files[0].mimetype,
      name: req.files[0].originalname,
      data: fs.readFileSync(
        __basedir + "/ressources/uploads/" + fileName
      ),
    }).then((Documents) => {
      fs.writeFileSync(
        __basedir + "/ressources/tmp/" + Documents.name,
        Documents.data
      );

      return res.send(`Fichier ajouté.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Erreur lors du chargement du fichier: ${error}`);
  }
};

const uploadCorro = async (req, res) => {
    try {
      console.log(req.files);
  
      if (req.files == undefined) {
        return res.send(`Vous devez selectionner un fichier.`);
      }
  
      Corro.create({
        type: req.files[0].mimetype,
        name: req.files[0].originalname,
        data: fs.readFileSync(
          __basedir + "/ressources/uploads/" + req.files[0].filename
        ),
      }).then((Corros) => {
        fs.writeFileSync(
          __basedir + "/ressources/tmp/" + Corros.name,
          Corros.data
        );
  
        return res.send(`Fichier ajouté.`);
      });
    } catch (error) {
      console.log(error);
      return res.send(`Erreur lors du chargement du fichier: ${error}`);
    }
  };


  const uploadSujet = async (req, res) => {
    try {
      console.log(req.files);
  
      if (req.files == undefined) {
        return res.send(`Vous devez selectionner un fichier.`);
      }
  
      Sujet.create({
        type: req.files[0].mimetype,
        name: req.files[0].originalname,
        data: fs.readFileSync(
          __basedir + "/ressources/uploads/" + req.files[0].filename
        ),
      }).then((Sujets) => {
        fs.writeFileSync(
          __basedir + "/ressources/tmp/" + Sujets.name,
          Sujets.data
        );
  
        return res.send(`Fichier ajouté.`);
      });
    } catch (error) {
      console.log(error);
      return res.send(`Erreur lors du chargement du fichier: ${error}`);
    }
  };


module.exports = {
  uploadDocument,
  uploadCorro,
  uploadSujet
};
