import mongoose from "mongoose";
import { petDao } from "../../src/modules/pets/pet.dao.js";
import { expect } from "chai";

// Conexión con la base de datos
mongoose.connect("mongodb://localhost:27017/70360-test");

// Descripción del tes
describe("===== TEST PETDAO =====", () => {
  let petTest;

  // Función que se ejecuta antes de iniciar todos los test
  before(() => {
    console.log("==== INICIO DE TODOS LOS TEST ====");
  });

  //Describir tara del test
  it("Debe retornar un array de pets", async () => {
    const pets = await petDao.getAll();

    // Validamos la respuesta
    expect(pets).to.be.an("array");
  });

  it("Debe crear un pet", async () => {
    const newPet = {
      name: "Felix",
      specie: "Gato",
      birthDate: "10-12-2020",
      image: "dfdafkdasfakldf",
    };

    const pet = await petDao.create(newPet);
    petTest = pet;
    // Afirmación
    expect(pet).to.be.an("object");
    expect(pet).to.have.property("_id");
    expect(pet).to.have.property("name");
    expect(pet).to.have.property("specie");
    expect(pet).to.have.property("image");

    //Negación
    expect(pet).to.not.have.property("age");
  });

  it("Se debe obtener una mascota por ID", async () => {
    const pet = await petDao.getOne({ _id: petTest._id });

    expect(pet).to.be.an("object");
    expect(pet).to.have.property("_id");
    expect(pet).to.have.property("name");
    expect(pet).to.have.property("specie");
    expect(pet).to.have.property("image");

    expect(pet.name).to.be.equal("Felix");
  });

  it("Se debe poder actualizar una mascota", async () => {
    
    const petUpdateData = {
      name: "Yogi",
      specie: "Oso"
    };

    const petUpdate = await petDao.update(petTest._id, petUpdateData);
    
    expect(petUpdate).to.be.an("object");
    expect(petUpdate).to.have.property("_id");
    expect(petUpdate).to.have.property("name");
    expect(petUpdate).to.have.property("specie");
    expect(petUpdate).to.have.property("image");

    expect(petUpdate.name).to.be.equal("Yogi");
    expect(petUpdate.specie).to.be.equal("Oso");

  })

  it("Debe eliminar una mascota", async () => {
     await petDao.remove(petTest._id);

     const pet = await petDao.getOne({_id: petTest._id});
     
     expect(pet).to.be.null;
  })

  // Función que se ejecuta al finalizar todos los test
  after(async () => {
    console.log("==== FIN DE TODOS LOS TEST ====");
    await petDao.removeAll();
    mongoose.disconnect();
  });
});
