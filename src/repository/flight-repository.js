const { Flights } = require("../models/index");

class FlightRepository {
  #createFiltetr(data) {
    
  }

  async createFlight(data) {
    try {
      const flight = Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
  async getAllFlight(filter) {
    try {
      const filterObject = this.#createFiltetr(filter);
      const flight = Flights.findAll();
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
