import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('country_workplace_data')
export class CountryWorkplaceData {

    @PrimaryGeneratedColumn({ type: "bigint", unsigned: true })
    id!: number;

    @Column("varchar", { length: 10, unique: true, name: "country_code" })
    countryCode!: string;

    @Column("longtext", { name: "country_data" })
    countryData!: string;

    @Column("longtext", { name: "country_market_data" })
    countryMarketData!: string;
}
