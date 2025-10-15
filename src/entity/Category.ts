import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Blog } from "./Blog";

@Entity('category')
export class Category {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    name!: string;

    @ManyToMany(() => Blog, blog => blog.categories)
    blogs!: Blog[];
}
