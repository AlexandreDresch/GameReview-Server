import { Router } from "express";

import gameRoutes from "./gameRoutes";

const routes = Router();

routes.use("/games", gameRoutes);

export default routes;