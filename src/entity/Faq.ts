import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('faq')
export class Faq {

    @PrimaryColumn("varchar", { length: 255 })
    id!: string;

    @Column("varchar", { length: 255 })
    category!: string;

    @Column("text")
    Question!: string;

    @Column("longtext")
    Answer!: string;

    @Column("int", { nullable: true })
    order!: number;
}
