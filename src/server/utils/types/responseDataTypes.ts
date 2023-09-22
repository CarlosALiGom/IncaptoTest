export interface ResponseStatusCodeStructure {
  ok: number;
  badRequest: number;
  notFound: number;
  internalServerError: number;
}

export interface ResponseMessageStructure {
  ok: string;
  badRequest: string;
  notFound: string;
  internalServerError: string;
}
