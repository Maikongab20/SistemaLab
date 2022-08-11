import { prisma } from "../prisma";
import { v4 as uuid } from "uuid";
import { hash } from "bcrypt";

interface RequestUser {
  name: string;
  email: string;
  CPF: string;
  password: string;
}

interface UserDelete {
  CPF: string;
}

class UserService {

  async createUser({ name, CPF, password }: RequestUser) {

    const nameAlredyExists = await prisma.user.findFirst({
      where: {
        name
      }
    });

    if (nameAlredyExists) {
      throw new Error(`User ${name} already exists`);
    }

    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        id: uuid(),
        name,
        CPF,
        password: passwordHash
      }
    });

    delete user.password;

    return user;
  }

  async changeUser({ name, email, CPF, password }: RequestUser) {

    // const NameExists = await prisma.user.findUnique({
    //   where: {
    //     name
    //   }
    // });



  }

  async deleteUser({ CPF }: UserDelete) {

    const UserExists = await prisma.user.findFirst({
      where: {
        CPF
      }
    });

    if (!UserExists) {
      throw new Error("user does not exist");
    }

    const access = await prisma.accessUser.findFirst({
      where: {
        userId: UserExists.id
      }
    });

    if (access) {
      await prisma.accessUser.delete({
        where: {
          id: access.id
        }
      });
    }

    await prisma.user.delete({
      where: {
        id: UserExists.id
      }
    });

    return "user deleted successfully";
  }
}

export { UserService }