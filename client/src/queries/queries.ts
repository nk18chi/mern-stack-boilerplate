import { gql } from "@apollo/client";

export const GET_USER_LIST_WITH_BELONGINGS_QUERY = gql`
  {
    users {
      id
      name
      belongings {
        id
        name
      }
    }
  }
`;
