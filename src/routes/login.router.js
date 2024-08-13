import express from "express";
import { login } from "../controller/login.controller.js";

export const loginRouter = express.Router();

loginRouter
    .get("/", (req, res) => {
        res.render('login');
    })
    .post("/login", login)
