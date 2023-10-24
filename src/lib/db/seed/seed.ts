import { db } from "../db";

export const clearDatabase = async () => {
  try {
    console.log("Clearing database... 🧹");
    // Example: await db.article.deleteMany();

    console.log("✅  Database cleared!");
    console.log("-----------------------\n\n");
  } catch (error) {
    console.log("❌  Error while clearing database!");
    console.log(error);
  }
};

/**
 * Seed function to call the article seeding process.
 */
const seed = async () => {
  // To only clear the database, uncomment the following line
  // await clearDatabase();
};

seed();
