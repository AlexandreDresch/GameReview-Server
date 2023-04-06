import { NextFunction, Request, Response } from "express";
import Joi from "joi";

import err from "../errors/errors";

type ValidationSchema = Joi.ObjectSchema<{
    name: string;
    description: string;
    publisher: string;
    rating: number;
}>;

export function validateSchema(schema: ValidationSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message).join(", ");
      throw err.conflictError(errors);
    }

    next();
  };
}