import { Request, Response } from "express";
import { UserService } from "../Service/User";





class UserController {

  async CreateUser(request: Request, response: Response) {
    const { name, email, CPF, password } = request.body;

    const service = new UserService();
    const user = await service.createUser({
      name,
      email,
      CPF,
      password,
    });

    return response.json(user);
  }

  async changeUser(request: Request, response: Response) {
    const { name, email, CPF, password } = request.body;
    const service = new UserService();
    const user = await service.changeUser({
      name,
      email,
      CPF,
      password,
    });
    return response.json(user);
  }

  async deleteUser(request: Request, response: Response) {
    const { CPF } = request.body;
    const service = new UserService();
    const user = await service.deleteUser({
      CPF
    });

    return response.json(user);

  }
}

export { UserController }