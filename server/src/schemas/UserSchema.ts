import z from "zod";

export const CreateUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(5, { message: "Name must be at least 5 characters long" }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    image: z.string().url({ message: "Image must be a valid URL" }).optional(),
  }),
});

export const UpdateUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(5, { message: "Name must be at least 5 characters long" })
      .optional(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .optional(),
    image: z.string().url({ message: "Image must be a valid URL" }).optional(),
  }),
});
