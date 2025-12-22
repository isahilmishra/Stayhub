const express = require("express");
const hostRouter = express.Router();
const hostController = require("../controllers/hostController");

// Import your multer configuration
// Assuming you exported 'upload' from your multer config file
const upload = require("../middleware/multerConfig");

hostRouter.get("/add-home", hostController.getAddHome);

// Use .fields() because you have two different input names: 'photo' and 'rulesDocument'
hostRouter.post("/add-home", upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'rulesDocument', maxCount: 1 }
]), hostController.postAddHome);

hostRouter.get("/host-home-list", hostController.getHostHomes);
hostRouter.get("/edit-home/:homeId", hostController.getEditHome);

hostRouter.post("/edit-home", upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'rulesDocument', maxCount: 1 }
]), hostController.postEditHome);

hostRouter.post("/delete-home/:homeId", hostController.postDeleteHome);

module.exports = hostRouter;