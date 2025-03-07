import { z } from "zod";

// Esquema de validación para el login
export const loginSchema = {
  body: z.object(
    {
      email: z.string().email("Tiene que ser un email válido"),
      password: z.string().min(6, "El password debe ser al menos de 6 caracteres")
    }
  )
}

