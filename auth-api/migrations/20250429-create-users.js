
import db from "../db.js";
import UserModel from "../models/user.js";

const runMigration = async () => {
  try {
    await db.query(UserModel);
    console.log("User table created successfully.");
  } catch (err) {
    console.error("Migration failed:", err);
  }
};

runMigration();
export { runMigration };
