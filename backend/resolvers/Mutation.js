export const Mutation = {
  createClient: async (parent, args, context) => {
    return await context.db.Client.create(args.input);
  },
  deleteClient: async (parent, args, context) => {
    return await context.db.Client.findByIdAndDelete(args.id);
  },
  createProject: async (parent, args, context) => {
    return await context.db.Project.create(args.input);
  },
  deleteProject: async (parent, args, context) => {
    return await context.db.Project.findByIdAndDelete(args.id);
  },
  updateProject: async (parent, args, context) => {
    return await context.db.Project.findByIdAndUpdate(args.id, args.input, {
      new: true,
      runValidators: true,
    });
  },
};
