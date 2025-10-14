import { DataSourceOptions } from 'typeorm';
import { Blog } from './src/entity/Blog';
import { Category } from './src/entity/Category';
import { Testimonial } from './src/entity/Testimonial';
import { CaseStudy } from './src/entity/CaseStudy';
import { Compare } from './src/entity/Compare';
import { CountryWorkplaceData } from './src/entity/CountryWorkplaceData';
import { Faq } from './src/entity/Faq';

const options: DataSourceOptions[] = [
  {
    name: "default",
    type: "mysql",
    host: "db",
    port: 3306,
    username: "root",
    password: "root",
    database: "onfra",
    synchronize: true,
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
