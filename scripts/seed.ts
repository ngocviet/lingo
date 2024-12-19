import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts=ignore

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Rusia",
        imageSrc: "/ru.svg",
      },
      {
        id: 2,
        title: "Germany",
        imageSrc: "/de.svg",
      },
      {
        id: 3,
        title: "VietNam",
        imageSrc: "/vn.svg",
      },
      {
        id: 4,
        title: "Japan",
        imageSrc: "/jp.svg",
      },
    ]);

    console.log("Seeding finish");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
