import bodyParser from "body-parser";
import express from "express";
import todoRouter from "./routers/todos-router";

const app = express();
const port = 3005;

app.use(bodyParser.json());

app.use("/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
