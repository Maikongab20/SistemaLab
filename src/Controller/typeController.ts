import { Request, Response } from "express";
import { typeService } from "../Service/type";



class typeController {

  async createType(request: Request, response: Response) {
    const { name } = request.body;
    const service = new typeService();
    const type = await service.create({
      name
    });
    return response.json(type);
  }

  async changeType(request: Request, response: Response) {
    const { id, name } = request.body;
    const service = new typeService();
    const type = await service.changeType({
      id,
      name
    });
    return response.json(type);
  }

  async deleteType(request: Request, response: Response) {
    const { id } = await request.body;
    const service = new typeService();
    const type = await service.deleteType({
      id
    });
    return response.json(type);
  }
}

export { typeController } 