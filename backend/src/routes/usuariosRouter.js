import { Router } from "express";
import bodyParser from "body-parser"
import { registrar, login } from "../controllers/usuariosController.js";

const router = Router();

router.post("/registro", registrar);
router.post("/login", login);

export default router;
