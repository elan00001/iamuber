import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import dataSource from "./createConnection";

export default function getRepository<T extends ObjectLiteral>(
  entity: EntityTarget<T>
): Repository<T> {
  if (dataSource.isInitialized) {
    return dataSource.getRepository(entity);
  }
  throw new Error("Data Source has not been initialized!");
}
