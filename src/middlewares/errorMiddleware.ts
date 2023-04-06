import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

import { ApplicationError } from "../protocols";

type ErrorMap = Record<string, number>;

export function handleApplicationErrors(
  err: ApplicationError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const errorMap: ErrorMap = {
    ConflictError: httpStatus.CONFLICT,
  };

  const errorName: string = err.name || "InternalServerError";
  const status: number = errorMap[errorName] || httpStatus.INTERNAL_SERVER_ERROR;
  const message: string = err.message || "Internal Server Error";

  return res.status(status).json({ error: errorName, message });
}
