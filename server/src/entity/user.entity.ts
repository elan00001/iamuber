import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("increment")
    id?: number

    @Column("varchar", { length: 255 })
    username: string
    
    @Column("varchar", { length: 255 })
    email: string
    
    @CreateDateColumn()
    created_at?: Date;

    @Column("int")
    points: number;
    
    @OneToMany(() => Vehicle, vehicle => vehicle.user)
    vehicles?: Vehicle[];
}