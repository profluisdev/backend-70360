export const createUserPath = {
  summary: "Create a new user",
  description: "Creates a new user in the system. Validates that the email is not already in use.",
  tags: ["Users"],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/User",
        },
      },
    },
  },
  responses: {
    201: {
      description: "Nuevo usuario",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/User",
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
}