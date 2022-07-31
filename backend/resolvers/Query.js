export const Query = {
  clients: async (parent, args, context) => {
    return await context.db.Client.find();
  },
  client: async (parent, args, context) => {
    return await context.db.Client.findById(args.id);
  },
  projects: async (parent, args, context) => {
    return await context.db.Project.find();
  },
  project: async (parent, args, context) => {
    return await context.db.Project.findById(args.id);
  },
};
