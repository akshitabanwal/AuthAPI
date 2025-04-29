
import  dotenv from "dotenv";
import pg from "pg";


dotenv.config();
if (!process.env.PG_USER || !process.env.PG_HOST || !process.env.PG_DATABASE || !process.env.PG_PASSWORD || !process.env.PG_PORT) {
    console.error("Missing environment variables! Make sure all PostgreSQL settings are provided in the .env file.");
    process.exit(1);  // Exit the process if env variables are missing
  }
const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });
 
  
  db.connect();
 
  
export default db;