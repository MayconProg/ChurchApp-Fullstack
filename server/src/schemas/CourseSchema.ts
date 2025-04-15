import z from "zod";

export const GetCoursesSchema = z.object({
  query: z.object({
    name: z.string().optional(),
  }),
});

export const GetCourseSchema = z.object({
  params: z.object({
    id: z.string().uuid().nonempty({ message: "Course Id must be provide!" }),
  }),
});

export const EnrollUserInCourseSchema = z.object({
  params: z.object({
    id: z.string().uuid().nonempty({ message: "Course Id must be provide!" }),
  }),

  // Temporary
  body: z.object({
    userId: z.string().uuid().nonempty({ message: "User Id must be provide!" }),
  }),
});

export const CreateCourseSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(5, { message: "Name must be at least 5 characters long" }),
    description: z
      .string()
      .min(5, { message: "Description must be at least 5 characters long" }),
    price: z.string().min(1, { message: "Price must be at least 1 character" }),
    image: z.string().url({ message: "Image must be a valid URL" }),
  }),
});

export const UpdateCourseSchema = z.object({
  params: z.object({
    id: z.string().uuid().nonempty({ message: "Course Id must be provide!" }),
  }),

  body: z
    .object({
      name: z
        .string()
        .min(5, { message: "Name must be at least 5 characters long" })
        .optional(),
      description: z
        .string()
        .min(5, { message: "Description must be at least 5 characters long" })
        .optional(),
      price: z
        .string()
        .min(1, { message: "Price must be at least 1 character" })
        .optional(),
      image: z
        .string()
        .url({ message: "Image must be a valid URL" })
        .optional(),
    })
    .refine((data) => Object.keys(data).length > 0, {
      message: "At least one field must be provide!",
    }),
});

export const DeleteCourseSchema = z.object({
  params: z.object({
    id: z.string().uuid().nonempty({ message: "Course Id must be provide!" }),
  }),
});
