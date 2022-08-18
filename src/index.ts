import { app } from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server on port 3333");
});


export { app };