import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { UserRepository } from "../repositories/UserRepository";
import { CreateUserProps, UpdateUserProps } from "../types/UserTypes";

dotenv.config();

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUsers() {
    return await this.userRepository.getUsers();
  }

  async getUser(id: string) {
    const user = await this.userRepository.getUser(id);

    if (!user) {
      throw new Error("User not found!");
    }

    return user;
  }

  async userLogin(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new Error("User not found!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password!");
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "3d" }
    );

    return token;
  }

  async createUser(userData: CreateUserProps) {
    const checkIfUserExist = await this.userRepository.getUserByEmail(
      userData.email
    );

    if (checkIfUserExist) {
      throw new Error("User already exist!");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    const user = await this.userRepository.createUser(userData);

    return user;
  }

  async updateUser(id: string, userData: UpdateUserProps) {
    const user = await this.userRepository.getUser(id);

    if (!user) {
      throw new Error("User not found!");
    }

    const updatedUser = await this.userRepository.updateUser(id, userData);

    return updatedUser;
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.getUser(id);

    if (!user) {
      throw new Error("User not found!");
    }

    await this.userRepository.deleteUser(id);
  }
}
