import { Request, Response } from "express";
import { authenticateUser } from "../authenticate/authenticate";



class authenticateController {

  async login(request: Request, response: Response) {
    const { name, password } = request.body;
    const service = new authenticateUser();
    const token = await service.login({
      name,
      password
    });
    return response.json(token);
  }
}

export { authenticateController }