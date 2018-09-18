const express = require("express");
const router = express.Router();

// @routes GET api/users/test
// @Tests users route
// @access Public

router.get("/test", (req, res) => res.json({ msg: "User working" }));

module.exports = router;
