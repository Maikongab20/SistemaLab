import { NextFunction, Request, Response } from "express";
import { prisma } from "../prisma";
import { decode } from 'jsonwebtoken';


export async function can(request: Request, response: Response, next: NextFunction) {

  const authtoken = request.headers.authorization;

  const [, token] = authtoken.split(" ");

  const id = decode(token);

  const access = await prisma.accessUser.findFirst({
    where: {
      accessId: id.sub.toString()
    }
  });

  if (!access) {
    return response.status(403).json({
      message: "access denied "
    });
  }

  return next();

}