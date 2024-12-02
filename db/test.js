const pool = require("./pool");

const testDatabase = async () => {
  try {
    console.log("Testing database connection...");
    const result = await pool.query("SELECT NOW();");
    console.log(
      "Database connected successfully. Current time:",
      result.rows[0].now
    );
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
  } finally {
    await pool.end();
  }
};

testDatabase();
