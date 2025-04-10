import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";

const userRouter = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.get("/", userController.getUsers.bind(userController));
userRouter.get("/:id", userController.getUser.bind(userController));
userRouter.post("/login", userController.login.bind(userController));
userRouter.post("/", userController.createUser.bind(userController));
userRouter.put("/:id", userController.updateUser.bind(userController));
userRouter.delete("/:id", userController.deleteUser.bind(userController));

export { userRouter };
