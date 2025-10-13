import { DataSourceOptions } from 'typeorm';
import { Blog } from './src/entity/Blog';
import { Category } from './src/entity/Category';
import { Testimonial } from './src/entity/Testimonial';

const options: DataSourceOptions[] = [
  {
    name: "default",
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "root",
    database: "onfraio_new_website",
    synchronize: true,
    logging: false,
    entities: [
      Blog,
      Category,
      Testimonial
    ],
    migrations: [
      "src/migration/**/*.ts"
    ],
    subscribers: [
      "src/subscriber/**/*.ts"
    ]
  },
  {
    name: "new_db",
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "root",
    database: "nextjs_db_2",
    synchronize: true,
    logging: false,
    entities: [
      Blog,
      Category,
      Testimonial
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
