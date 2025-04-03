import mongoose from "mongoose";
import { userDao } from "../../src/modules/users/user.dao.js";
import { expect } from "chai";

// Conexión con la base de datos


// Descripción del tes
describe("===== TEST USERDAO =====", () => {
  let userTest;

  // Función que se ejecuta antes de iniciar todos los test
  before( async () => {
    console.log("==== INICIO DE TODOS LOS TEST ====");
    await mongoose.connect("mongodb://localhost:27017/70360-test");
  });



  //Describir tara del test
  it("Debe retornar un array de usuarios", async () => {
    const users = await userDao.getAll();

    // Validamos la respuesta
    expect(users).to.be.an("array");
  });

  it("Debe crear un usuario", async () => {
    const newUser = {
      first_name: "Juan",
      last_name: "Perez",
      email: "jp@gmail.com",
      password: "123",
    };

    const user = await userDao.create(newUser);
    userTest = user;
    // Afirmación
    expect(user).to.be.an("object");
    expect(user).to.have.property("_id");
    expect(user).to.have.property("first_name");
    expect(user).to.have.property("last_name");
    expect(user).to.have.property("email");
    expect(user).to.have.property("password");
    expect(user.first_name).to.be.equal("Juan");

    //Negación
    expect(user).to.not.have.property("age");
  });

  it("Se debe obtener un usuario por ID", async () => {
    const user = await userDao.getOne({ _id: userTest._id });

    expect(user).to.be.an("object");
    expect(user).to.have.property("_id");
    expect(user).to.have.property("first_name");
    expect(user).to.have.property("last_name");
    expect(user).to.have.property("email");
    expect(user).to.have.property("password");

    expect(user.first_name).to.be.equal("Juan");
  });

  it("Se debe poder actualizar una usuario", async () => {
    const userUpdateData = {
      first_name: "Pepe",
      last_name: "Sapo",
    };

    const userUpdate = await userDao.update(userTest._id, userUpdateData);

    expect(userUpdate).to.be.an("object");
    expect(userUpdate).to.have.property("_id");
    expect(userUpdate).to.have.property("first_name");
    expect(userUpdate).to.have.property("last_name");
    expect(userUpdate).to.have.property("email");
    expect(userUpdate).to.have.property("password");

    expect(userUpdate.first_name).to.be.equal("Pepe");
    expect(userUpdate.last_name).to.be.equal("Sapo");
  });

  it("Debe eliminar un usuario", async () => {
    await userDao.remove(userTest._id);

    const user = await userDao.getOne({ _id: userTest._id });

    expect(user).to.be.null;
  });

  // Función que se ejecuta al finalizar todos los test
  after(async () => {
    console.log("==== FIN DE TODOS LOS TEST ====");
    await userDao.removeAll();
    mongoose.disconnect();
  });
});
