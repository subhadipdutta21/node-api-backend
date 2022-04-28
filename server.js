const express = require("express");

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 4000;


const path1Routes = require('./Routes/index')

app.get("/", (req, res) =>
  res.send({ msg: "Hello, u have hit this endpoint!" })
);


app.use('/path1', path1Routes)



app.listen(PORT, () => {
  console.log("server runnning!");
});
