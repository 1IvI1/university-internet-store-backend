const express = require("express");
const router = express.Router();
const UniversityController = require("../controllers/UniversityController");
const { singlifyAray } = require("./utils/SinglifyArray");

const renameArr = arr => Array.isArray(arr) && arr.map(x => {
  const data = { ...x, name: x.shortName }
  delete data.shortName
  return data
})

router.get("/universities", async (req, res) => {
  try {
    const universities = await UniversityController.getUniversities()
    const renamedArr = renameArr(universities)
    res.send(renamedArr)
  } catch (err) {
    res.sendStatus(400)
  }
})

router.get("/faculties/:id", async (req, res) => {
  try {
    const id = req.params.id
    const faculties = await UniversityController.getFaculties(id)
    const renamedArr = renameArr(faculties)
    res.send(renamedArr)
  } catch (err) {
    res.sendStatus(400)
  }
})

router.get("/groups/:id", async (req, res) => {
  try {
    const id = req.params.id
    const groups = await UniversityController.getGroups(id)
    const renamedArr = renameArr(groups)
    res.send(renamedArr)
  } catch (err) {
    res.sendStatus(400)
  }
})

router.get("/faculties", async (req, res) => {
  try {
    const faculties = await UniversityController.getAllFaculties()
    const renamedArr = renameArr(faculties)
    res.send(renamedArr)
  } catch (err) {
    res.sendStatus(400)
  }
})

router.get("/groups", async (req, res) => {
  try {
    const groups = await UniversityController.getAllGroups()
    const renamedArr = renameArr(groups)
    res.send(renamedArr)
  } catch (err) {
    res.sendStatus(400)
  }
})

router.get("/lectures/:id", async (req, res) => {
  try {
    const id = req.params.id
    const groups = await UniversityController.getLectures(id)
    res.send(groups)
  } catch (err) {
    res.sendStatus(400)
  }
})

router.get("/professors/:id", async (req, res) => {
  try {
    const id = req.params.id
    const groups = await UniversityController.getProfessors(id)
    res.send(groups)
  } catch (err) {
    res.sendStatus(400)
  }
})


module.exports = router