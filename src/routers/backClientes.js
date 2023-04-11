import backclientes from "../controllers/backClientes.js";
import Router from "express";

const routerBackClientes = Router();

routerBackClientes.get("/", backclientes.get);
routerBackClientes.post("/", backclientes.post);
routerBackClientes.put("/", backclientes.put);
routerBackClientes.delete("/", backclientes.del);

export default routerBackClientes;
