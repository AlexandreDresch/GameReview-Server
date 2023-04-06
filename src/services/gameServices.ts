import errors from "../errors/errors";

import gameRepositories from "../repositories/gameRepositories";

import { GameProps } from "../protocols";

async function create(game: GameProps) {
  const {
    rows: [g],
  } = await gameRepositories.findByName(game.name);

  if (g) throw errors.conflictError("Game already exists");

  await gameRepositories.create(game);
}

async function findAll() {
  const { rows, rowCount } = await gameRepositories.findAll();

  if (!rowCount) throw errors.notFoundError();

  return rows;
}

async function updateReview(id: number, rating: number) {
  const { rowCount } = await gameRepositories.findById(id);

  if (!rowCount) throw errors.notFoundError();

  await gameRepositories.updateReview(id, rating);
}

async function deleteReview(id: number) {
  const { rowCount } = await gameRepositories.findById(id);

  if (!rowCount) throw errors.notFoundError();

  await gameRepositories.deleteReview(id);
}

export default { create, findAll, updateReview, deleteReview };
