const { Flights } = require("../models/index");
const { Op, where } = require("sequelize");
class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.minPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    }
    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.lte]: data.maxPrice } },
          { price: { [Op.gte]: data.minPrice } },
        ],
      });
    }

    // Object.assign(filter, {

    //     [Op.and]: [
    //       { price: { [Op.lte]: 7000 } },
    //       { price: { [Op.gte]: 5000 } },
    //     ],

    // });
    return filter;
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
      const filterObject = this.#createFilter(filter);
      const flight = Flights.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
  async updateFlight(flightId,data) {
    try {
      await Flights.update(data,{where:{
        id : flightId
      }})
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;

/**
 * where:{
 * arrivalAirportId:2,
 * departureAirportId:4,
 * price : {[Op.gte]: 4000}
 *
 * }
 */
