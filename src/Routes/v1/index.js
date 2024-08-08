const express = require("express");
const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const airportController = require("../../controllers/airport-controller");
const { FlightMIddleware } = require("../../middleware/index");

const router = express.Router();

router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);
router.patch("/city/:id", cityController.update);

router.post(
  "/flights",
  FlightMIddleware.validateCreateFlight,
  flightController.create
);
router.get("/flights", flightController.getAll);
router.get("/flights/:id", flightController.get);
router.patch("/flights/:id", flightController.update);

router.post("/airports", airportController.create);

module.exports = router;
