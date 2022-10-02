import { Request, Response } from "express";

export const errorCont = (req: Request, res: Response) => {
  res.status(404).json({
    status: "fail",
    message: `No route fount on request ${req.path}`,
  });
};
