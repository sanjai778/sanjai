import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('testimonials')
export class Testimonial {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar", { length: 255 })
    name!: string;

    @Column("varchar", { length: 255 })
    position!: string;

    @Column("text")
    content!: string;

    @Column("varchar", { length: 255 })
    img!: string;

    @Column("varchar", { length: 255 })
    category!: string;

    @CreateDateColumn({ type: "datetime", precision: 6, default: () => "CURRENT_TIMESTAMP(6)" })
    created_at!: Date;

    @UpdateDateColumn({ type: "datetime", precision: 6, default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at!: Date;

    @Column("varchar", { length: 255, nullable: true })
    title!: string;
}
