const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareDate } = require("../utils/helper");
class Flightservice {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (compareDate(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time can't be less than departure time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the Service layer");
      throw { error };
    }
  }
  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlight(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong in the Service layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flights = await this.flightRepository.getFlight(flightId);
      return flights;
    } catch (error) {
      console.log("Something went wrong in the Service layer");
      throw { error };
    }
  }
  async updateFlight(flightId, data) {
    try {
      const response = await this.flightRepository.updateFlight(flightId, data);
      return response;
    } catch (error) {
      console.log("Something went wrong in the Service layer");
      throw { error };
    }
  }
}

module.exports = Flightservice;
