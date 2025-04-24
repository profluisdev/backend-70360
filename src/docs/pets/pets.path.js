export const petPaths = {
  "/pets": {
    get: {
      summary: "Obtenemos todos los usuarios",
      description: "Creates a new user in the system. Validates that the email is not already in use.",
      tags: ["Pets"],
      responses: {
        200: {
          description: "Devuelve todos los usuario",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Pet",
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
          content: {
            "application/json": {},
          },
        },
      },
    },
    
    
    
  }
}