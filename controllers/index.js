const router = require("express").Router();

const apiRoute = require("./api");
const homeRoute = require("./homeRoutes");

router.use("/", homeRoute);
router.use("/api", apiRoute);

module.exports = router;
