const { Client } = require('pg');

const client = new Client(process.env.DATABASE_URL ? {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
} : {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err.stack));

async function getUnavailableSeats(trainCode, fromStationId, toStationId, doj) {
  try {
    const result = await client.query(
  'SELECT * FROM get_unavailable_seats($1, $2, $3, $4);',
  [
    parseInt(trainCode),             
    String(fromStationId),            
    String(toStationId), 
    String(doj) 
  ]
);

    return result.rows;
  } catch (error) {
    console.error("Error fetching unavailable seats:", error);
    throw error;
  }
}

module.exports = {
  client,
  getUnavailableSeats
};

// module.exports = {
//   client
// };