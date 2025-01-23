import express, { Request, Response } from "express";

import UserRoutes from "./routes/users";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
