import { Router } from "express";
import bodyParser from "body-parser"
import { create, deletePostagem, getAll, getPostagem, updatePostagem, uploadImagePostagem } from "../controllers/postagensController.js";

const router = Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getPostagem);
router.put("/:id", updatePostagem);
router.delete("/:id", deletePostagem);
router.post("/:id/imagem", bodyParser.raw({type: ["image/jpeg", "image/png", "image/jpg"], limit: "5mb"}), uploadImagePostagem)

export default router;
