import { prisma } from "../prisma";
import { v4 as uuid } from 'uuid';

interface RequestType {
  name: string;

}

interface type {
  id: string;
  name: string;
}

interface id {
  id: string;
}

class typeService {

  async create({ name }: RequestType) {

    const NameAlreadyExists = await prisma.type.findFirst({
      where: {
        name
      }
    });

    if (NameAlreadyExists) {
      throw new Error("name already exists");
    }

    const type = await prisma.type.create({
      data: {
        id: uuid(),
        name
      }
    });
    return type;
  }

  async changeType({ id, name }: type) {

    const NameExist = await prisma.type.findFirst({
      where: {
        name
      }
    });

    if (NameExist) {
      throw new Error("name exists");
    }

    const type = await prisma.type.update({
      where: {
        id
      },
      data: {
        name
      }
    });
    return type;
  }

  async deleteType({ id }: id) {

    const NameExist = await prisma.type.findFirst({
      where: {
        id
      }
    });

    if (!NameExist) {
      throw new Error("type not found")
    }

    const product = await prisma.typeProduct.findMany({
      where: {
        typeId: id
      }
    });

    if (product.length != 0) {
      throw new Error("type with mary products");
    }

    await prisma.type.delete({
      where: {
        id
      }
    });

    return "type deleted successfully";
  }
}

export { typeService }