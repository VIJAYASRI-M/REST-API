import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
query Products {
  products {
    id
    images {
      altText
      url
    }
    name
    description
    price
    availability
  }
}
`;