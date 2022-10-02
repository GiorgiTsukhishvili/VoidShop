import { Request, Response } from "express";
import { Categories } from "../model/categoriesModel";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Categories.find();

    res.status(200).json({
      status: "success",
      data: {
        categories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
