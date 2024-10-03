import { DataSource, Repository } from "typeorm";
import { AdminEntity } from "./admin.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminRepository extends Repository<AdminEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(AdminEntity, dataSource.createEntityManager())
  }

  getAdmin() {
    const qb = this.dataSource.createQueryRunner();
    qb.query('select * from sdfdsfd;');
  }
}