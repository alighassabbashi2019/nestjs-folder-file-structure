import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'admin', name: 'admins' })
export class AdminEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 64 })
  firstname: string;

  @Column({ type: 'varchar', length: 64 })
  lastname: string;
}