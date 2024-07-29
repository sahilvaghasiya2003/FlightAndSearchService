const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
// const CityRepository = require('./repository/city-repository')

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT || process.env.PORT, () => {
    console.log(`server sarted at ${PORT}`);
    // const repo = new CityRepository;
    // repo.creatCity({name: "Surat"});
    // repo.deleteCity(8);    //here 8 is id of ahmedabad
    
    
  });
};

setupAndStartServer();
