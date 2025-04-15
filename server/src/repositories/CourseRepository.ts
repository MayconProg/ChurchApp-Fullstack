import { prisma } from "../lib/prisma";
import { CreateCourseProps, UpdateCourseProps } from "../types/CourseTypes";

export class CourseRepository {
  async getCourses(title?: string) {
    const courses = await prisma.course.findMany({
      where: { title: { contains: title, mode: "insensitive" } },
      include: {
        _count: {
          select: {
            usersOnCourses: true,
          },
        },
      },
    });

    return courses;
  }

  async getCourse(id: string) {
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            usersOnCourses: true,
          },
        },
      },
    });

    return course;
  }

  async enrollUserInCourse(userId: string, courseId: string) {
    await prisma.usersOnCourses.create({
      data: { userId, courseId },
    });
  }

  async createCourse(courseData: CreateCourseProps) {
    const course = await prisma.course.create({
      data: courseData,
    });

    return course;
  }

  async updateCourse(id: string, courseData: UpdateCourseProps) {
    const course = await prisma.course.update({
      where: { id },
      data: courseData,
    });

    return course;
  }

  async deleteCourse(id: string) {
    await prisma.course.delete({
      where: { id },
    });
  }

  async isUserEnrolledInCourse(userId: string, courseId: string) {
    const enrollment = await prisma.usersOnCourses.findFirst({
      where: { userId, courseId },
    });

    return enrollment !== null;
  }
}
