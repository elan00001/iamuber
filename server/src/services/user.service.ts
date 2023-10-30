import dataSource from "../utils/createConnection";
import { User } from "../entity/user.entity";

export async function getUserById(id: number, withVehicles: boolean = false) {
  try {
    const user = await dataSource.getRepository(User).find({
      where: {
        id: +id,
      },
      relations: withVehicles ? ["vehicles"] : [] ,
    });
    return user;
  } catch (err) {
    throw new Error((err as Error).message);
  }
}

export async function createUser(username: string, email: string) {
  try {
    const user: User = {
      username,
      email,
      points: 0,
    };
    await dataSource.getRepository(User).save(user);
  } catch (err) {
    throw new Error((err as Error).message);
  }
}