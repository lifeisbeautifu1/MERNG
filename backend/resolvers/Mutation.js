export const Mutation = {
  addClient: async (parent, args, context) => {
    return await context.db.Client.create(args.input);
  },
  deleteClient: async (parent, args, context) => {
    const projects = await context.db.Project.find({ userId: args.id });
    projects.forEach((project) => project.remove());
    return await context.db.Client.findByIdAndDelete(args.id);
  },
  addProject: async (parent, args, context) => {
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
