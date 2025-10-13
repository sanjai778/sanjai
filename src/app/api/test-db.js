import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('DB Connection Successful');
    res.status(200).json({ message: '✅ Connection Successful!' });
  } catch (error) {
    console.error('DB Connection Failed:', error);
    res.status(500).json({ message: '❌ Connection Failed', error: error.message });
  } finally {
    if (connection) await connection.end();
  }
}