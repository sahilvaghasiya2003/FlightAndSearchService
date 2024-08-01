const {ClientErrors,ServiceErrors,SuccessCodes} = require('../utils/error-codes')

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
    return res.status(ClientErrors.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invald request body for create flight",
      err: "missing mandatory property to create a flight",
    });
  }
  next();
};

// const validateUpdateFlight = (req,res,next)=>{
//     if (
//         req.body.flightNumber ||
//         req.body.airplaneId 
//       ) {
//         return res.status(400).json({
//           data: {},
//           success: false,
//           message: "Invald request body for update flight",
//           err: "you can't change the flight number and ID.",
//         });
//       }
//       next();
// }

module.exports = {
    validateCreateFlight,
    // validateUpdateFlight
}

/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTimed
 * departureTime
 * price
 * totalSeats
 * boardingGate
 */
