import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "lifeos-api",
  });
});

app.listen(port, () => {
  console.log(`LifeOS API listening on port ${port}`);
});
