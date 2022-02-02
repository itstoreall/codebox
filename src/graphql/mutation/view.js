import { gql } from '@apollo/client';

export const CREATE_VIEW = gql`
  mutation createView($input: ViewInput) {
    createView(input: $input) {
      id
      title
      path
    }
  }
`;
