import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/schemas.js';
import 'colors';
import 'dotenv/config';
import { resolvers } from './resolvers/index.js';
import { connectDB } from './db/connectDB.js';
import Client from './models/client.js';
import Project from './models/project.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db: {
      Client,
      Project,
    },
  },
});

const start = async () => {
  try {
    await connectDB();
    server
      .listen()
      .then(({ url }) =>
        console.log(`Server running at ${url}`.cyan.underline.bold)
      );
  } catch (error) {
    console.log(`${error}`.red.underline.bold);
  }
};

start();
