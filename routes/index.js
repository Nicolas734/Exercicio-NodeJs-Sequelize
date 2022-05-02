import { Router } from "express";
import { insertMensagem, selectMensagem } from "../controller/anotacoesController.js";

const router = Router()

router.post('/', insertMensagem)
router.get('/', selectMensagem)

export default router;