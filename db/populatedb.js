const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const dbUrl = process.env.DB_URL;
if (!dbUrl) {
  console.error("Error: DB_URL not defined in .env");
  process.exit(1);
}

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
message VARCHAR ( 255 )
);`;

const main = async () => {
  console.log("seeding");
  const client = new Client({
    connectionString: dbUrl,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
};

main();
