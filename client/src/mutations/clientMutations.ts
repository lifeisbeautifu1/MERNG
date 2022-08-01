import { gql } from '@apollo/client';

export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export const ADD_CLIENT = gql`
  mutation addClient($input: AddClientInput!) {
    addClient(input: $input) {
      id
      name
      email
      phone
    }
  }
`;
