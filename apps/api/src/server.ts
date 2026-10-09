import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { connectDatabase } from "./config/database.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.WEB_ORIGIN,
  }),
);
app.use(express.json());

app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "lifeos-api",
  });
});

async function startServer(): Promise<void> {
  try {
    await connectDatabase();

    app.listen(env.PORT, () => {
      console.log(`LifeOS API listening on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start LifeOS API:", error);
    process.exit(1);
  }
}

void startServer();
