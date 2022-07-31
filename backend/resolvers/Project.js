export const Project = {
  client: async (parent, args, context) => {
    return await context.db.Client.findById(parent.clientId);
  },
};
