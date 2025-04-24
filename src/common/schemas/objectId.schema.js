import { z } from "zod";

export const objectIdSchema = {
  params: z.object({
    id: z.string().regex(/^[a-fA-F0-9]{24}$/, "De ser tipo ObjectId")
  })
}