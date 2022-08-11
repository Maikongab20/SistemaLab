import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes"
import "dotenv";
import "express-async-errors";
const app = express();

app.use(express.json());

app.use(router);

app.get('/api/', (request, response) => {
  return response.json({
    name: "maikon",
    password: "1234"
  });
})

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  return response.json({
    status: "error",
    message: error.message
  });
});

app.listen(3333, () => {
  console.log("server on port 3333");
});