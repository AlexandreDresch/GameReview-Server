import { NextFunction, Request, Response } from "express";

import gameServices from "../services/gameServices";

async function create(req: Request, res: Response, next: NextFunction) {
  const { name, description, publisher, rating } = req.body;

  try {
    await gameServices.create({ name, description, publisher, rating });

    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

async function findAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const games = await gameServices.findAll();

    return res.send(games);
  } catch (error) {
    next(error);
  }
}

async function updateReview(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const { rating } = req.body;

  try {
    await gameServices.updateReview(+id, +rating);

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

async function deleteReview(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  try {
    await gameServices.deleteReview(+id);

    return res.sendStatus(202);
  } catch (error) {
    next(error);
  }
}

export default { create, findAll, updateReview, deleteReview };
