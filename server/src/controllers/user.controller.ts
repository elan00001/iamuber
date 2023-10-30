import { User } from "../entity/user.entity";

import { Request, Response } from "express";
import * as UserService from "../services/user.service";

export async function createUser(req: Request, res: Response) {
  const { username, email } = req.body;
  await UserService.createUser(username, email);
  res.json({
    success: true,
    message: "User created successfully",
  })
}

export async function getUser(req: Request, res: Response) {
  // with vehicles
  const { id } = req.params;
  const user = await UserService.getUserById(+id, true);
  res.json({
    success: true,
    data: user
  })
}
