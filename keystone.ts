import { config } from "@keystone-6/core";
import { session, withAuth } from "./auth";
import { lists } from "./schema";

export default config(
  withAuth({
    db: { provider: "sqlite", url: "file:./app.db" },
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
