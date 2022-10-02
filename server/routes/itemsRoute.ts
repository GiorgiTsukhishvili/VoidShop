import express from "express";
import { getAllItems, getSingleItem } from "../controllers/itemController";

const router = express.Router();

router.route("/").get(getAllItems);

router.route("/:id").get(getSingleItem);

export default router;
