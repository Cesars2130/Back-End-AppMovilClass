import { Request, Response } from "express";
import { CreateActivityUseCase } from "../../aplication/CreateActivityUseCase"
import { GetActivitiesByClassUseCase } from "../../aplication/GetActivitiesByClassUseCase";

export class ActivityController {
  constructor(
    private readonly createActivityUseCase: CreateActivityUseCase,
    private readonly getActivitiesByClassUseCase: GetActivitiesByClassUseCase
  ) {}

  async createActivity(req: Request, res: Response): Promise<Response> {
    try {
      const { activity_name, activity_description } = req.body;
      let id_user:number = parseInt(req.body.id_user);
      let id_class:number = parseInt(req.body.id_class);
      console.log(activity_description, activity_name, id_class, id_user)
      const newActivity = await this.createActivityUseCase.execute(id_user, activity_name, activity_description, id_class);
      return res.status(201).json(newActivity);
    } catch (error) {
      return res.status(400).json({ message: "error" });
    }
  }

  async getActivitiesByClass(req: Request, res: Response): Promise<Response> {
    try {
      const { id_class } = req.params;
      const activities = await this.getActivitiesByClassUseCase.execute(Number(id_class));
      return res.status(200).json(activities);
    } catch (error) {
      return res.status(500).json({ message: "Error al obtener actividades" });
    }
  }
}
