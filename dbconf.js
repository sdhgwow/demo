import pkg from 'pg';
const { Pool } = pkg

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'название моей дб',
    password: 'пароль от сервера',
    port: 'порт',
});