import { Request, Response } from "express";
import { GetClassesByUserUseCase } from "../../aplication/GetClassesByUserUseCase";
import { JoinClassUseCase } from "../../aplication/JoinClassesUseCase";
import { join } from "path";

export class EnrollmentController {
  constructor(
    private readonly getClassesByUserUseCase: GetClassesByUserUseCase,
    private readonly joinClassUseCase: JoinClassUseCase
  ) {}

  async getClassesByUser(req: Request, res: Response): Promise<Response> {
    try {
      const id_user: number = parseInt(req.params.id_user);
      const classes = await this.getClassesByUserUseCase.execute(id_user);

      return res.status(200).json(classes);
    } catch (error) {
      return res.status(500).json({ message: "Error al obtener clases" });
    }
  }

  async joinClass(req: Request, res: Response): Promise<Response> {
    try {
      const { class_code } = req.body;
      const id_user: number = parseInt(req.body.id_user);
      const joined = await this.joinClassUseCase.execute(id_user, class_code);
      if (joined) {
        return res
          .status(200)
          .json({ message: "Te has unido a la clase correctamente" });
      } else {
        return res
          .status(400)
          .json({ message: "Clase no encontrada o ya estás inscrito" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Error al unirse a la clase" });
    }
  }
}
