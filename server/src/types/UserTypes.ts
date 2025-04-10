import { Prisma, User } from "../../generated/prisma";

export type UserItem = Omit<User, "createdAt">;
export type CreateUserProps = Pick<
  UserItem,
  "name" | "email" | "password" | "image"
>;
export type UpdateUserProps = Partial<
  Omit<CreateUserProps, "email"> & Pick<UserItem, "image">
>;
