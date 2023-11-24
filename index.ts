import bodyParser from "body-parser";
import express from "express";
import todoRouter from "./routers/todos-router";
import cors from "cors";
// bun add cors
// bun add -D @types/cors
const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(cors());

app.use("/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
