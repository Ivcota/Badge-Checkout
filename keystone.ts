import { config } from "@keystone-6/core";
import { session, withAuth } from "./auth";
import { lists } from "./schema";

export default config(
  withAuth({
    db: {
      provider: "postgresql",
      url: process.env.DB as string,
    },
    experimental: {
      generateNextGraphqlAPI: true,
      generateNodeAPI: true,
    },
    lists,
    session,
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
  })
);
