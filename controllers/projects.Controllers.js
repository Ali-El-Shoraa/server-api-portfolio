const Projects = require("../model/projectsModel");
const asyncHandler = require("express-async-handler");
const fs = require("fs/promises");
//
/******************************************************************************************** */
// GET All
const getAllProjects = asyncHandler(async (req, res) => {
  try {
    const allProjects = await Projects.find({});
    res.status(200).json({ count: allProjects.length, data: allProjects });
  } catch (error) {
    return res.status(400).send({ message: "send all request failds" });
  }
});
//
/******************************************************************************************** */
// GET One
const getOneProject = asyncHandler(async (req, res) => {
  try {
    const project = await Projects.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    return res.status(400).send({ message: "send all request failds" });
  }
});
//
/******************************************************************************************** */
// POST / Create One
// const setProject = asyncHandler(async (req, res) => {
//   try {
//     if (
//       !req.body.name &&
//       !req.file &&
//       !req.body.skill &&
//       !req.body.description &&
//       !req.body.github &&
//       !req.body.demo
//     ) {
//       return res.status(400).send({ message: "send all request failds" });
//     }

//     const { video, name, skill, description, github, demo } = req.body;
//     const newProject = await Projects.create({
//       img: req.file.filename,
//       video,
//       name,
//       skill,
//       description,
//       github,
//       demo,
//     });
//     res.status(200).json(newProject);
//   } catch (error) {
//     return res.status(400).send({ message: "send all request failds" });
//   }
// });
//
/******************************************************************************************** */
// PUT / Update
// const updateProject = asyncHandler(async (req, res) => {
//   try {
//     const project = await Projects.findById(req.params.id);

//     if (!project) {
//       return res.status(404).json({ msg: "Project not found" });
//     }

//     const filePath = `uploads/imgs/${project.img}`;
//     console.log(filePath);

//     if (
//       !req.body.name &&
//       !req.body.skill &&
//       !req.body.description &&
//       !req.body.github &&
//       !req.body.demo
//     ) {
//       return res.status(400).send({ message: "Required fields are missing" });
//     }

//     await fs.access(filePath, fs.constants.F_OK);
//     await fs.unlink(filePath);

//     if (req.file) {
//       const updatedProject = await Projects.findByIdAndUpdate(
//         req.params.id,
//         { ...req.body, img: req.file.filename },
//         { new: true }
//       );

//       res.json(updatedProject);
//     } else {
//       return res.status(400).send({ message: "Image file is missing" });
//     }
//   } catch (error) {
//     console.error("Error updating project:", error);
//     res.status(500).json({ msg: "Internal Server Error", error: error });
//   }
// });

//
/******************************************************************************************** */
// DELETE
// const deleteProject = asyncHandler(async (req, res) => {
//   try {
//     const project = await Projects.findById(req.params.id);

//     if (!project) {
//       return res.status(404).json({ msg: "Project not found" });
//     }

//     const filePath = `uploads/imgs/${project.img}`;

//     await fs.unlink(filePath);

//     await Projects.findByIdAndDelete(req.params.id);

//     res.status(200).json({ msg: "Successfully deleted" });
//   } catch (error) {
//     console.error("Error deleting project:", error);
//     res.status(500).json({ msg: "Internal Server Error" });
//   }
// });
//
/******************************************************************************************** */
//
// module.exports = { getAllProjects, getOneProject, setProject, updateProject, deleteProject };
module.exports = { getAllProjects, getOneProject };
