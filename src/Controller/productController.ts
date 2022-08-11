import { Request, Response } from "express";
import { ProductService } from "../Service/Products";



class ProductController {

  async createProduct(request: Request, response: Response) {

    const { name, barcode, price } = request.body;
    const service = new ProductService();
    const product = await service.createProduct({
      name,
      barcode,
      price
    });

    return response.json(product);
  }

  async changeProduct(request: Request, response: Response) {

    const { id, name, barcode, price } = request.body;
    const service = new ProductService();
    const product = await service.changeProduct({
      id,
      name,
      barcode,
      price
    });

    return response.json(product);
  }

  async deleteProduct(request: Request, response: Response) {

    const { id } = request.body;
    const service = new ProductService();
    const product = await service.deleteProduct({
      id
    });

    return response.json(product);
  }
}

export { ProductController } 