import { Course } from "../../generated/prisma";

export type CourseItem = Course;

export type CreateCourseProps = Omit<Course, "id" | "createdAt">;

export type UpdateCourseProps = Partial<CreateCourseProps>;
