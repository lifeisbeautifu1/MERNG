import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    clients: [Client!]
    client(id: ID!): Client
    projects: [Project!]
    project(id: ID!): Project
  }
  type Mutation {
    addClient(input: AddClientInput!): Client!
    deleteClient(id: ID!): Client!
    addProject(input: AddProjectInput!): Project!
    deleteProject(id: ID!): Project!
    updateProject(input: UpdateProjectInput!, id: ID!): Project!
  }
  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String!
    projects: [Project!]
  }
  input AddClientInput {
    name: String!
    email: String!
    phone: String!
  }
  type Project {
    id: ID!
    clientId: ID!
    name: String!
    description: String!
    status: String!
    client: Client!
  }
  input AddProjectInput {
    clientId: ID!
    name: String!
    description: String!
    status: String!
  }
  input UpdateProjectInput {
    name: String
    description: String
    status: String
  }
`;
