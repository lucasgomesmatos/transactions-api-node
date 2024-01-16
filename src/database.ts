import { Knex, knex as setupKnex } from 'knex'

export const knexConfig: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './db/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const database = setupKnex(knexConfig)