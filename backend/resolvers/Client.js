export const Client = {
  projects: async (parent, args, context) => {
    const projects = await context.db.Project.find({
      clientId: parent.id,
    });
    return projects;
  },
};
