import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// console.log("Helloasdf World");
