import { Response } from 'express';
import { Request } from 'express';
import { AccessService } from '../Service/Access';



class AccessController {
  async CreateAccess(request: Request, response: Response) {
    const { name, nivel } = request.body;

    const Service = new AccessService();
    const access = await Service.CreateAccess({
      name,
      nivel
    });
    return response.json(access);
  }

  async changeAcess(request: Request, response: Response) {
    const { id, name, nivel } = request.body;

    const Service = new AccessService();
    const access = await Service.changeAccess({
      id,
      name,
      nivel
    });

    return response.json(access);

  }

  async deleteAccess(request: Request, response: Response) {
    const { id } = request.body;

    const Service = new AccessService();
    const access = await Service.DeleteAccess({
      id
    });

    return response.json(access);
  }
}

export { AccessController }