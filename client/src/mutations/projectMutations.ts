import { gql } from '@apollo/client';

export const ADD_PROJECT = gql`
  mutation addProject($input: AddProjectInput!) {
    addProject(input: $input) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($input: UpdateProjectInput!, $id: ID!) {
    updateProject(input: $input, id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
