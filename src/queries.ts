import gql from "graphql-tag";

export const HOME = gql`
  {
    people {
      name
    }
  }
`;
