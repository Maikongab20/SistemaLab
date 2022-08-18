import { app } from "../app"
import request from "supertest"

describe('user', () => {
  it('crate user', async () => {

    const responser = await request(app)
      .post("/createUser")
      .send({
        name: "fernando",
        CPF: "56790853765",
        email: "maikon111gabriel@gmail.com",
        password: "1234"
      });

    expect(responser.status).toBe(201)

  })

})