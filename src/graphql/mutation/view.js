import { gql } from '@apollo/client';

export const CREATE_VIEW = gql`
  mutation createView($input: CreateViewInput) {
    createView(input: $input) {
      id
      title
      path
    }
  }
`;

export const DELETE_VIEW = gql`
  mutation deleteView($id: ID) {
    deleteView(id: $id) {
      id
    }
  }
`;

export const UPDATE_VIEW = gql`
  mutation updateView($id: ID, $input: UpdateViewInput) {
    updateView(id: $id, input: $input) {
      id
      title
      path
    }
  }
`;
