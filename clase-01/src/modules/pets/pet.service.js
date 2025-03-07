import { generatePetsMocks } from "../../mock/pets.mocks.js";
import { petDao } from "./pet.dao.js";

class PetService{
  async create(data){
    return await petDao.create(data);
  }

  async createPetsMocks(amount) {
    const pets = generatePetsMocks(amount);
    await petDao.removeAll();
    for(const pet of pets){
      await petDao.create(pet);
    }

    return pets;
  }

}

export const petService = new PetService();