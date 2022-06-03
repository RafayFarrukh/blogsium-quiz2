import express from "express";
const router = express.Router();

import {
  createArticle,
  deleteArticle,
  updateArticle,
  getAllArticle,
  getById,
  likeArticle,
  unlikeArticle,
  commentArticle,
} from "../controllers/articlesController.js";

router.route("/create").post(createArticle);
router.route("/all").get(getAllArticle);
router.route("/:id").get(getById);
router.route("/delete/:id").delete(deleteArticle);

router.route("/update/:id").put(updateArticle);
router.route("/like/:id").put(likeArticle);
router.route("/unlike/:id").put(unlikeArticle);
router.route("/comment/:id").put(commentArticle);
export default router;
