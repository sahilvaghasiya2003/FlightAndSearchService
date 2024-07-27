const express = require("express");
const port = require('./configs/serverConfig')
require('dotenv').config();

const setupAndStartServer = async () => {
  const app = express();
  const PORT = 3000;

  app.get("/",(req,res)=>{
    res.send("hey server")
  })

  app.listen(PORT || process.env.PORT , () => {
    console.log(`server sarted at ${port.PORT}`);
  });
};

setupAndStartServer();
