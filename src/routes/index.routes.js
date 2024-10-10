import { Router } from "express";

import suspeitosRoutes from "./suspeitos.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
    return res.status(200).json({ message: "Rota funcionando!" });
});

routes.use("/suspeitos", suspeitosRoutes);

export default routes;