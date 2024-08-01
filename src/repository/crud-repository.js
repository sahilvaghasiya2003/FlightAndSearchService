class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("somthind went wrong at crud repository");
    }
  }
  async delete(modelId) {
    try {
      const result = await this.model.destroy({
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("somthind went wrong at crud repository");
    }
  }
  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      console.log("somthind went wrong at crud repository");
    }
  }
  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log("somthind went wrong at crud repository");
    }
  }
  async update(modelId, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("somthind went wrong at crud repository");
    }
  }
}


module.exports = CrudRepository;