import { Router } from "express";

import gameControllers from "../controllers/gameControllers";

import { validateSchema } from "../middlewares/schemaValidationMiddleware";

import { gameSchema, updateRatingSchema } from "../schemas/Game";

const gameRoutes: Router = Router();

gameRoutes.get("/", gameControllers.findAll);
gameRoutes.post("/", validateSchema(gameSchema), gameControllers.create);
gameRoutes.patch("/update/:id", validateSchema(updateRatingSchema), gameControllers.updateReview);
gameRoutes.delete("/delete/:id", gameControllers.deleteReview);

export default gameRoutes;