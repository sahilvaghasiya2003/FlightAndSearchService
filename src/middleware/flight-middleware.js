const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "Invald request body for create flight",
      err: "missing mandatory property to create a flight",
    });
  }
  next();
};

module.exports = {
    validateCreateFlight,
}

/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * totalSeats
 * boardingGate
 */
