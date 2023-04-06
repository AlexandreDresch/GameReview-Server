import "express-async-errors";

import express from "express";
import cors from "cors";

import { handleApplicationErrors } from "./middlewares/errorMiddleware";
import routes from "./routes/index";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(handleApplicationErrors);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)); 