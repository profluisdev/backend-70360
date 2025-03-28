import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "Documentación de API Adoption Pets",
      version: "1.0.0",
      description: "API Adopciones de mascotas",
    },
  },
  apis: ["./src/docs/**/*.yaml"],
};

export const specs = swaggerJsDoc(swaggerOptions);