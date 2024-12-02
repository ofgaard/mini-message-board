const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const dbUrl = process.env.DB_URL;
if (!dbUrl) {
  console.error("Error: DB_URL not defined in .env");
  process.exit(1);
}

const SQL = `
DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  message VARCHAR(255),
  author VARCHAR(255),
  date TIMESTAMP
);
`;

const main = async () => {
  console.log("seeding");
  const client = new Client({
    connectionString: dbUrl,
    ssl: { rejectUnauthorized: false, sslmode: "require" },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
  console.log("Database URL:", process.env.DB_URL);
};

main();
