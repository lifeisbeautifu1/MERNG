import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query getAllProjects {
    projects {
      id
      name
      status
    }
  }
`;

export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      status
      description
      client {
        name
        id
        email
        phone
      }
    }
  }
`;
