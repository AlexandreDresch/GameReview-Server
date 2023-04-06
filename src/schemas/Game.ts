import joi from "joi";

export const gameSchema = joi.object({
  name: joi.string().min(2).required(),
  description: joi.string().required(),
  publisher: joi.string().required(),
  rating: joi.number().min(0).max(10).required(),
});

export const updateRatingSchema = joi.object({
  rating: joi.number().min(0).max(10).required(),
});