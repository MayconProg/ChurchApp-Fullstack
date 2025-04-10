import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import { userRouter } from "./routes/UserRoutes";

dotenv.config();

const app = express();

// Server Configs
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.use("/api/users", userRouter);

const port = Number(process.env.PORT) || 2108;

app.listen(port, "0.0.0.0", () => {
  console.log(`HTTP Server Running on http://localhost:${port} ☕`);
});
