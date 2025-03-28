import { z } from "zod";

export const petsMocksSchema = {
  params: z.object({
    amount: z.coerce
      .number({ invalid_type_error: "El valor debe ser un número" })
      .int("Tiene que ser un número entero")
      .positive("El número tiene que ser positivo"),
  })
};
