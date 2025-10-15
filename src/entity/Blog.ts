import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Category } from "./Category";

@Entity('blog')
export class Blog {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToMany(() => Category, category => category.blogs)
    @JoinTable()
    categories!: Category[];

    @Column()
    date!: Date;

    @Column()
    status!: string;

    @Column({ nullable: true })
    createdAt!: Date;

    @Column({ nullable: true })
    lastModified!: Date;

    @Column()
    postType!: string;

    @Column()
    slug!: string;

    @Column()
    title!: string;

    @Column("text")
    content!: string;

    @Column()
    featuredImage!: string;
}
