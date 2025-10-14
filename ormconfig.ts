import { DataSourceOptions } from 'typeorm';
import { Blog } from './src/entity/Blog';
import { Category } from './src/entity/Category';
import { Testimonial } from './src/entity/Testimonial';
import { CaseStudy } from './src/entity/CaseStudy';
import { Compare } from './src/entity/Compare';
import { CountryWorkplaceData } from './src/entity/CountryWorkplaceData';
import { Faq } from './src/entity/Faq';
import "dotenv/config";

const options: DataSourceOptions[] = [
  {
    name: "default",
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [
      Blog,
      Category,
      Testimonial,
      CaseStudy,
      Compare,
      CountryWorkplaceData,
      Faq
    ],
    migrations: [
      "src/migration/**/*.ts"
    ],
    subscribers: [
      "src/subscriber/**/*.ts"
    ]
  }
];

export default options;
