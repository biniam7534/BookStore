import express from "express";
import { saveContactMessage, getContactMessages } from "../contorollers/contactControllers.js";

const router = express.Router();

router.post("/", saveContactMessage);
router.get("/", getContactMessages);

export default router;
