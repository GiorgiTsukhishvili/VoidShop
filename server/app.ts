import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { errorCont } from "./controllers/errorController";
import itemsRouter from "./routes/itemsRoute";
import categoriesRouter from "./routes/categoriesRoute";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/items", itemsRouter);

app.use("/categories", categoriesRouter);

app.all("*", errorCont);

const port = 5000;

mongoose
  .connect("mongodb://localhost:27017/void-shop")
  .then(() =>
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    })
  )
  .catch((err: Error) => console.log(err));
