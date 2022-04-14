import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { password, text } from "@keystone-6/core/fields";

export const lists: Lists = {
  User: list({
    fields: {
      email: text({ validation: { isRequired: true }, isIndexed: "unique" }),
      password: password({ validation: { isRequired: true } }),
    },
  }),
};
