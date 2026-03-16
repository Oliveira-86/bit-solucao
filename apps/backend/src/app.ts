import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { healthRouter } from "./routes/health.js";

export const app = express();

app.use(helmet());
app.use(cors({ origin: env.frontendUrl }));
app.use(express.json());

app.get("/api", (_req, res) => {
  res.json({ message: "API running" });
});

app.use("/api", healthRouter);
