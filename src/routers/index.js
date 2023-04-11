import Router from "express";
import { default as backClientes } from "../routers/backClientes.js"

let router = Router();

router.use("/apiClientes", backClientes)

export default router;
