import express from "express";
import { getCategories } from "../controllers/categoriesController";

const router = express.Router();

router.route("/").get(getCategories);

export default router;
