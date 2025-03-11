import express from "express";

import { getClassByIdController, createClassController } from "./dependencies";
import { verifyToken } from "../../middlewares/autMiddleware";

export const classRouter = express.Router();

classRouter.post(
    "/",
    verifyToken,
    createClassController.run.bind(createClassController)
)

classRouter.get(
    "/:id_class",
    verifyToken,
    getClassByIdController.run.bind(getClassByIdController)
)
