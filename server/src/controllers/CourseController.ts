import { Request, Response } from "express";
import { CourseService } from "../services/CourseService";

export class CourseController {
  private courseService: CourseService;

  constructor(courseService: CourseService) {
    this.courseService = courseService;
  }

  async getCourses(req: Request, res: Response) {
    try {
      const title = req.query.title as string;
      let courses = await this.courseService.getCourses(title);

      res
        .status(200)
        .json({ message: "Courses Found Successfully!", data: courses });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getCourse(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const course = await this.courseService.getCourse(id);

      res
        .status(200)
        .json({ message: "Course Found Successfully!", data: course });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async enrollUserInCourse(req: Request, res: Response) {
    try {
      //Get userId from JWT
      const { userId } = req.body;
      const { id: courseId } = req.params;

      const course = await this.courseService.enrollUserInCourse(
        userId,
        courseId
      );

      res.status(200).json({
        message: "User Enrolled In Course Successfully!",
        data: course,
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async createCourse(req: Request, res: Response) {
    try {
      const courseData = req.body;
      const course = await this.courseService.createCourse(courseData);

      res
        .status(201)
        .json({ message: "Course Created Successfully!", data: course });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateCourse(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const courseData = req.body;

      const updatedCourse = await this.courseService.updateCourse(
        id,
        courseData
      );

      res
        .status(200)
        .json({ message: "Course Updated Successfully!", data: updatedCourse });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteCourse(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.courseService.deleteCourse(id);

      res.status(200).json({ message: "Course Deleted Successfully!" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
