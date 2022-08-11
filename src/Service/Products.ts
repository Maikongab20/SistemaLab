import { prisma } from "../prisma";
import { v4 as uuid } from 'uuid';

interface RequestProduct {
  name: string;
  barcode: string;
  price: number;
  description: string;

}

interface ChangeProduct {
  id: string;
  name: string;
  barcode: string;
  price: number;
  description: string;
}

interface ProductId {
  id: string;
}

class ProductService {
  async createProduct({ name, barcode, price, description }: RequestProduct) {

    const NameAlreadyExists = await prisma.product.findFirst({
      where: {
        name
      }
    });
    if (NameAlreadyExists) {
      throw new Error("name already exists");
    }

    const product = await prisma.product.create({
      data: {
        id: uuid(),
        name,
        barcode,
        price,
        description
      }
    });

    return product;
  }

  async changeProduct({ id, name, barcode, price, description }: ChangeProduct) {
    const NameExist = await prisma.product.findFirst({
      where: {
        name
      }
    });
    if (NameExist) {
      throw new Error(`Product ${name} already exists`);
    }

    const product = await prisma.product.update({
      where: {
        id
      },
      data: {
        name,
        barcode,
        price,
        description
      }
    });

    return product;
  }

  async deleteProduct({ id }: ProductId) {

    const idExist = await prisma.product.findUnique({
      where: {
        id
      }
    });

    if (!idExist) {
      throw new Error("product not found");
    }

    const typeProduct = await prisma.typeProduct.findMany({
      where: {
        productId: id
      }
    });

    if (typeProduct) {
      await prisma.typeProduct.deleteMany({
        where: {
          productId: id
        }
      });
    }
    await prisma.product.delete({
      where: {
        id
      }
    });

    return "prosuct deleted successfully";
  }

  async LisatProduct() {
    const product = await prisma.product.findMany();

    return product;
  }

  async ListaProductType({ id }: ProductId) {
    const Listaproducts = await prisma.typeProduct.findMany({
      where: {
        typeId: id
      }
    });

    return Listaproducts;
  }
}

export { ProductService } 