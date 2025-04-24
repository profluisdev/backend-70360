import { NotFoundError } from "../../common/errors/errors.js";
import { generatePetsMocks } from "../../mock/pets.mocks.js";
import { petDao } from "./pet.dao.js";

class PetService{
  async create(data){
   
    return await petDao.create(data);
  }

  async getOne(query) {
    const pet = await petDao.getOne(query);
    if(!pet) throw new NotFoundError("Pet not found");

    return pet;
  }

  async createPetsMocks(amount) {
    const pets = generatePetsMocks(amount);
    await petDao.removeAll();
    for(const pet of pets){
      await petDao.create(pet);
    }

    return pets;
  }

  async updatePet(id, data){
    const pet = await petDao.getOne({_id: id});
    if(!pet) throw new NotFoundError("Pet not found");
    return await petDao.update(id, data);
  }

  async deletePet(id){
    const pet = await petDao.getOne({_id: id});
    if(!pet) throw new NotFoundError("Pet not found");

    return await petDao.remove(id);
  }

}

export const petService = new PetService();