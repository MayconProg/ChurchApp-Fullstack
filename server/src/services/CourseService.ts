import { CourseRepository } from "../repositories/CourseRepository";
import { CreateCourseProps, UpdateCourseProps } from "../types/CourseTypes";

export class CourseService {
  private courseRepository: CourseRepository;

  constructor(courseRepository: CourseRepository) {
    this.courseRepository = courseRepository;
  }

  getCourses(name?: string) {
    return this.courseRepository.getCourses(name);
  }

  async getCourse(id: string) {
    const course = await this.courseRepository.getCourse(id);

    return course;
  }

  async enrollUserInCourse(userId: string, courseId: string) {
    const checkIfCourseExists = await this.courseRepository.getCourse(courseId);

    if (!checkIfCourseExists) {
      throw new Error("Course not found!");
    }

    const checkIfUserIsEnrolled =
      await this.courseRepository.isUserEnrolledInCourse(userId, courseId);

    if (checkIfUserIsEnrolled) {
      throw new Error("User is Already Enrolled in This Course!");
    }

    await this.courseRepository.enrollUserInCourse(userId, courseId);
  }

  async createCourse(courseData: CreateCourseProps) {
    const course = await this.courseRepository.createCourse(courseData);

    return course;
  }

  async updateCourse(id: string, courseData: UpdateCourseProps) {
    const checkIfCourseExists = await this.courseRepository.getCourse(id);

    if (!checkIfCourseExists) {
      throw new Error("Course not found!");
    }

    const updatedCourse = await this.courseRepository.updateCourse(
      id,
      courseData
    );

    return updatedCourse;
  }

  async deleteCourse(id: string) {
    const checkIfCourseExists = await this.courseRepository.getCourse(id);

    if (!checkIfCourseExists) {
      throw new Error("Course not found!");
    }
    await this.courseRepository.deleteCourse(id);
  }
}
