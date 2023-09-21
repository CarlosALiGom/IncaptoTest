import { type Request } from "express";

export interface CustomRequest extends Request {
  body: {
    commands: string;
  };
}
