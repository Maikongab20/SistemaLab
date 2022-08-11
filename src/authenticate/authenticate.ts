import { prisma } from "../prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";


interface Login {
  name: string;
  password: string;
}

class authenticateUser {

  async login({ name, password }: Login) {

    const UserExists = await prisma.user.findFirst({
      where: {
        name
      }
    });

    if (!UserExists) {
      throw new Error("name or password incorrect");
    }

    const passwordMatch = await compare(password, UserExists.password);

    if (!passwordMatch) {
      throw new Error("name or password incorrect");
    }

    const token = sign({}, process.env.KEY, {
      subject: UserExists.id,
      expiresIn: "20s"
    });

    return { token }
  }

}
export { authenticateUser }