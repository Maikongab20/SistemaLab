import { v4 as uuid } from "uuid";
import { prisma } from "../prisma";


interface RequestAccess {
  name: string;
  nivel: number;
}

interface RequestAccessUser {
  id: string;
  name: string;
  nivel: number;
}

interface RequestId {
  id: string;
}

class AccessService {

  async CreateAccess({ name, nivel }: RequestAccess) {

    const nameAlreadyExists = await prisma.access.findUnique({
      where: {
        name
      }
    });

    if (nameAlreadyExists) {
      throw new Error(`Access name : ${name} already exists`);
    }

    const access = await prisma.access.create({
      data: {
        id: uuid(),
        name,
        nivel
      }
    });
    return access;
  }

  async changeAccess({ id, name, nivel }: RequestAccessUser) {

    const nameAlreadyExists = await prisma.access.findUnique({
      where: {
        name
      }
    });

    if (nameAlreadyExists) {
      throw new Error(`Access name : ${name} already exists`);
    }

    const access = await prisma.access.update({
      where: {
        id
      },
      data: {
        name,
        nivel
      }
    });

    return access;
  }

  async DeleteAccess({ id }: RequestId) {

    const accessExists = await prisma.access.findFirst({
      where: {
        id
      }
    });

    if (!accessExists) {
      throw new Error(`Access ${id} does not exists`);
    }

    const user = await prisma.accessUser.findMany({
      where: {
        accessId: id
      }
    });

    if (user) {
      await prisma.accessUser.deleteMany({
        where: {
          id
        }
      });
    }

    await prisma.access.delete({
      where: {
        id
      }
    });

    return "access deleted successfully";
  }
}
export { AccessService } 