const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./Routes/index");
const db = require("./models/index");
// const CityRepository = require('./repository/city-repository')

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);       

  app.listen(PORT || process.env.PORT, () => {
    console.log(`server sarted at ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
    // const repo = new CityRepository;
    // repo.creatCity({name: "Surat"});
    // repo.deleteCity(8);    //here 8 is id of ahmedabad
  });
};

setupAndStartServer();
