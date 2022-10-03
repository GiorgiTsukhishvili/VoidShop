import { Request, Response } from "express";
import { Items } from "../model/itemsModel";

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await Items.find();

    res.status(200).json({
      status: "success",
      count: items.length,
      data: {
        items,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getSingleItem = async (req: Request, res: Response) => {
  try {
    const item = await Items.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        item,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
