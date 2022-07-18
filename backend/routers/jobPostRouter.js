import express from "express";
import {createPost , getPosts,getPost , commentPost } from "../controllers/jobPostController.js"

const router = express.Router();

router.route("/joblist").post(createPost);
router.route("/joblist").get(getPosts);
router.route("/joblist/post/:id").get(getPost);
router.route("/joblist/post/:id/commentPost").post(commentPost);

export default router
