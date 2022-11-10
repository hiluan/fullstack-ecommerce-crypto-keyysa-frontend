export const PRODUCT_QUERY = `
query {
    products {
      data {
        attributes {
          title
          description
          price
          slug
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;

// // # query with parent/child relation
// export const PRODUCT_QUERY = `
// query {
//   parent {
//     data {
//       attributes {
//         title
//         description
//         image {
//           data {
//             attributes {
//               formats
//             }
//           }
//         }
//         products {
//           data {
//             attributes {
//               title
//               price
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `;

export const GET_PRODUCT_QUERY = `
query getProduct($slug: String!) {
  products (filters: {slug: {eq: $slug}}){
    data {
      attributes {
        title
        description
        price
        compareAtPrice
        slug
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}
`;
