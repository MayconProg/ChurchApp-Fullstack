import { Router } from "express";
import { CourseRepository } from "../repositories/CourseRepository";
import { CourseService } from "../services/CourseService";
import { CourseController } from "../controllers/CourseController";

const courseRouter = Router();

const courseRepository = new CourseRepository();
const courseService = new CourseService(courseRepository);
const courseController = new CourseController(courseService);

courseRouter.get("/", courseController.getCourses.bind(courseController));
courseRouter.get("/:id", courseController.getCourse.bind(courseController));
courseRouter.post("/", courseController.createCourse.bind(courseController));
courseRouter.put("/:id", courseController.updateCourse.bind(courseController));

courseRouter.delete(
  "/:id",
  courseController.deleteCourse.bind(courseController)
);

courseRouter.post(
  "/:id/enroll",
  courseController.enrollUserInCourse.bind(courseController)
);

export { courseRouter };
