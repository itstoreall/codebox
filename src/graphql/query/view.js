import { gql } from '@apollo/client';

export const ALL_VIEWS = gql`
  fragment AllViews on View {
    title
    path
  }
`;

export const GET_ALL_VIEWS = gql`
  ${ALL_VIEWS}
  query {
    getAllViews {
      id
      ...AllViews
    }
  }
`;

export const GET_ONE_VIEW = gql`
  ${ALL_VIEWS}
  query getView($id: ID) {
    getView(id: $id) {
      id
      ...AllViews
    }
  }
`;
