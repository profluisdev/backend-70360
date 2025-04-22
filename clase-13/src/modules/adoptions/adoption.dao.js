import { adoptionModel } from "./adoption.model.js";

class AdoptionDao {

  async create(data) {
    return await adoptionModel.create(data);
  }

  async getAll() {
    return await adoptionModel.find().populate(["owner", "pet"]);
  }

  async getOne(query) {
    return await adoptionModel.findOne(query).populate(["owner", "pet"]);
  }

  async update(id, data) {
    return await adoptionModel.findByIdAndUpdate(id, data, { new: true });
  }

  async remove(id) {
    return await adoptionModel.findByIdAndDelete(id);
  }

  async removeAll(){
    return await adoptionModel.deleteMany();
  }
}

export const adoptionDao = new AdoptionDao();
