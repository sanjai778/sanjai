import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('case_studies')
export class CaseStudy {

    @PrimaryColumn("text")
    Id!: string;

    @Column("text", { nullable: true })
    Title!: string;

    @Column("varchar", { length: 255, nullable: true })
    Card_Image_Url!: string;

    @Column("varchar", { length: 255, nullable: true })
    Header!: string;

    @Column("text", { nullable: true })
    Testimonial_Quote!: string;

    @Column("varchar", { length: 255, nullable: true })
    Author_Name!: string;

    @Column("varchar", { length: 255, nullable: true })
    Client_Name!: string;

    @Column("varchar", { length: 255, nullable: true })
    Company_Name!: string;

    @Column("varchar", { length: 255, nullable: true })
    Company_Image_url!: string;

    @Column("varchar", { length: 255, nullable: true })
    Card_Title!: string;

    @Column("varchar", { length: 255, nullable: true })
    Category!: string;

    @Column("text", { nullable: true })
    Challenges!: string;

    @Column("text", { nullable: true })
    Results!: string;

    @Column("text", { nullable: true })
    Overview!: string;

    @Column("text", { nullable: true })
    Card_Description!: string;

    @Column("text", { nullable: true })
    Meta_Description!: string;

    @Column("varchar", { length: 255, nullable: true })
    Industry!: string;

    @Column("varchar", { length: 255, nullable: true })
    Locations!: string;

    @Column("varchar", { length: 255, nullable: true })
    Employees!: string;

    @Column("varchar", { length: 255, nullable: true })
    Product!: string;

    @Column("varchar", { length: 255, nullable: true })
    Service_Time!: string;
}
