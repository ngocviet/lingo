import { cache } from "react";

import db from "@/db/drizzle";

export const getCourse = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});
