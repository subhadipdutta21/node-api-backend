const express = require('express')
const router = express.Router()

router.get("/", (req, res) =>
  res.send({ msg: "Hello, u have hit path 1!" })
);



module.exports = router