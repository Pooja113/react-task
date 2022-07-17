import express from "express";
import {createPost , getPosts } from "../controllers/jobPostController.js"

const router = express.Router();

router.route("/").post(createPost);
router.route("/").get(getPosts);

export default router
