const express = require("express");
const router = express.Router();
const { enrollCourse } = require("../controllers/courseController");

router.post("/enroll", enrollCourse);

module.exports = router;
