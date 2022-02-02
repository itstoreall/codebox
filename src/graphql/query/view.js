import { gql } from '@apollo/client';

export const ALL_VIEWS = gql`
  fragment AllViews on View {
    id
    title
    path
    links {
      id
      href
      anchor
      source
    }
  }
`;

export const GET_ALL_VIEWS = gql`
  ${ALL_VIEWS}
  query {
    getAllViews {
      ...AllViews
    }
  }
`;

export const GET_ONE_VIEW = gql`
  query getView($id: ID) {
    getView(id: $id) {
      id
      title
    }
  }
`;
