import { connectionDb } from "../config/db";

import { GameProps } from "../protocols";

async function create(game: GameProps) {
  await connectionDb.query(
    `
            INSERT INTO games (name, description, publisher, rating) VALUES ($1, $2, $3, $4)
        `,
    [game.name, game.description, game.publisher, game.rating]
  );
}

async function findByName(name: string) {
  return connectionDb.query(
    `
        SELECT * FROM games WHERE name = $1
        `,
    [name]
  );
}

async function findById(id: number) {
  return connectionDb.query(
    `
        SELECT * FROM games WHERE id = $1
        `,
    [id]
  );
}

async function findAll() {
  return await connectionDb.query(`SELECT * FROM games`);
}

async function updateReview(id: number, rating: number) {
  await connectionDb.query(`UPDATE games SET rating = $1 WHERE id = $2`, [
    rating,
    id,
  ]);
}

async function deleteReview(id: number) {
  await connectionDb.query(`DELETE FROM games WHERE id = $1`, [id]);
}

export default {
  create,
  findByName,
  findAll,
  findById,
  updateReview,
  deleteReview,
};
