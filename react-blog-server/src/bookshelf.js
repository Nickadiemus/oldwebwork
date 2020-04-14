import knex from 'knex';
import bookshelf from 'bookshelf';
import KnexConfig from '../knexfile';

export default bookshelf(knex(KnexConfig.development));
