import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"



export function TokenValed(request: Request, response: Response, next: NextFunction) {

  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: "token not provided"
    });
  }

  const [, token] = authToken.split(" ");

  try {

    verify(token, process.env.KEY);
    return next();
  } catch (error) {
    return response.status(401).json({
      message: "token invalid"
    });
  }

}