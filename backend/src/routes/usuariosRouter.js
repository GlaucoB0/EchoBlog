import { Router } from "express";
import bodyParser from "body-parser"
import { registrar, login, getAll, updateUsuario } from "../controllers/usuariosController.js";

const router = Router();

router.post("/registro", registrar);
router.post("/login", login);
router.put("/:id", updateUsuario);
router.get("/", getAll);

export default router;
