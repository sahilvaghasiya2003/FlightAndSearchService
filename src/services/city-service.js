const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepository.creatCity(data);
      return city;
    } catch (error) {
      console.log("ERROR occure at service layer");
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.CityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("ERROR occure at service layer");
    }
  }
  async updateCity(data, cityId) {
    try {
      const city = this.CityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("ERROR occure at service layer");
    }
  }
  async getCity(cityId) {
    try {
        const city = await this.CityRepository.getCity(cityId)
        return city;
    } catch (error) {
      console.log("ERROR occure at service layer");
    }
  }
}

module.exports = CityService;
