import { Router } from "express";
import { pool } from "../config/db.js";

export const healthRouter = Router();

healthRouter.get("/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");

    return res.status(200).json({
      status: "ok",
      service: "backend",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch {
    return res.status(500).json({
      status: "error",
      service: "backend",
      database: "disconnected",
      timestamp: new Date().toISOString(),
    });
  }
});
