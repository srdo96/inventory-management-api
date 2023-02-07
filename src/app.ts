import cors from "cors";
import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Welcome to the inventory management api");
});

export default app;
