import { Database, PostgresConnector } from 'denodb';
import { config } from './config.ts';

import { Meeting } from './models/meetings.ts';
import { Theme } from './models/themes.ts';

const connection = new PostgresConnector({
  host: config.host,
  username: config.username,
  password: config.password,
  database: 'postgres',
});

const db = new Database(connection);
db.link([Meeting, Theme]);
await db.sync({ drop: true });
await db.close();
