import { prisma } from "../lib/prisma";
import { CreateUserProps, UpdateUserProps } from "../types/UserTypes";

export class UserRepository {
  async getUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  async getUser(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        usersOnCourses: { include: { courses: true } },
        Order: true,
      },
    });

    return user;
  }

  async getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  async createUser(userData: CreateUserProps) {
    const user = await prisma.user.create({
      data: userData,
    });

    return user;
  }

  async updateUser(id: string, userData: UpdateUserProps) {
    const user = await prisma.user.update({
      where: { id },
      data: userData,
    });

    return user;
  }

  async deleteUser(id: string) {
    await prisma.user.delete({
      where: { id },
    });
  }
}
