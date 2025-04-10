import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.getUsers();

      res
        .status(200)
        .json({ message: "Users Found Successfully!", data: users });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await this.userService.getUser(id);

      res.status(200).json({ message: "User Found Successfully!", data: user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await this.userService.userLogin(email, password);

      res
        .status(200)
        .json({ message: "User Logged In Successfully!", data: token });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const user = await this.userService.createUser(userData);

      res
        .status(201)
        .json({ message: "User Created Successfully!", data: user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const user = await this.userService.updateUser(id, userData);

      res
        .status(200)
        .json({ message: "User Updated Successfully!", data: user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.userService.deleteUser(id);
      res.status(200).json({ message: "User Deleted Successfully!" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
