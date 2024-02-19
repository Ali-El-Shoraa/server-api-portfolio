const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const multer = require("multer");

const {
  getAllProjects,
  getOneProject,
  // setProject,
  // updateProject,
  // deleteProject,
} = require("../controllers/projects.Controllers");

//
/*********************************************************************************************************** */
// multer to upload image

// const diskStorage = multer.diskStorage({
//   destination: function (req, file, callbackFn) {
//     callbackFn(null, "uploads/imgs");
//   },
//   filename: function (req, file, callbackFn) {
//     const ext = file.mimetype.split("/")[1];
//     const filename = `img_${Date.now()}.${ext}`;
//     callbackFn(null, filename);
//   },
// });

// const uploads = multer({ storage: diskStorage });

// const handleImageUpload = uploads.single("img");
//
/*********************************************************************************************************** */
// to check id

// const checkId = async (req, res, next) => {
//   const { id } = req.params;

//   // Validate the ID format
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ msg: "Invalid id format" });
//   }

//   next();
// };

//
/*********************************************************************************************************** */
//

router.route("/").get(getAllProjects); //.post(handleImageUpload, setProject);

router.route("/:id").get(getOneProject);
// .get(checkId, getOneProject)
// .put(checkId, handleImageUpload, updateProject)
// .delete(deleteProject);

module.exports = router;
