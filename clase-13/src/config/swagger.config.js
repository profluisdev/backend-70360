import swaggerJsDoc from "swagger-jsdoc";
import { userPaths } from "../docs/user/user.path.js";
import { userDocSchema } from "../docs/user/user.schema.js";
import { petPaths } from "../docs/pets/pets.path.js";
import { petDocSchema } from "../docs/pets/pet.schema.js";

export const swaggerOptions = {
  openapi: '3.0.0',
  info: {
    title: 'PalCare API',
    description: 'Documentación de la API de PalCare',
    version: '1.0.0',
  },
  servers: [
    {
      url: `http://localhost:8080/api`,
      description: 'Servidor de desarrollo',
    },
  ],
  paths: {
    ...userPaths,
    ...petPaths,
    // Aquí puedes agregar más paths de otros módulos
  },
  components: {
    schemas: {
      User: userDocSchema,
      Pet: petDocSchema
      // Aquí puedes agregar más schemas de otros módulos
    }
  }
};

// export const specs = swaggerJsDoc(swaggerOptions);