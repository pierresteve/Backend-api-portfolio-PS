import { TSMigrationGenerator } from '@mikro-orm/migrations';
import { Logger } from '@nestjs/common';
import { defineConfig } from '@mikro-orm/postgresql';
import * as process from 'process';
import 'dotenv/config';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const logger = new Logger('MikroORM');

const mikroOrmConfig = defineConfig({
  entities: ['dist/**/infrastructure/persistence/ORM/**/*.entity.js'],
  entitiesTs: ['src/**/infrastructure/persistence/ORM/**/*.entity.ts'],
  
  dbName: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  debug: true,
  logger: logger.log.bind(logger),
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    path: 'dist/database/migrations',
    pathTs: 'src/database/migrations',
    glob: '!(*.d).{js,ts}',
    transactional: true,
    disableForeignKeys: true,
    allOrNothing: true,
    dropTables: true,
    safe: true,
    emit: 'ts',
    generator: TSMigrationGenerator,
    snapshot: false,
  },
});

export default mikroOrmConfig;
