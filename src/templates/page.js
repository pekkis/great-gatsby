import React from "react";
import { graphql } from "gatsby";

const Page = props => {
  const {
    data: {
      wpapi: { page },
    },
  } = props;

  return (
    <div>
      <h2>{decodeURI(page.title)}</h2>
    </div>
  );
};

export default Page

export const query = graphql`
  query PageQuery($id: ID!) {
    wpapi {
      page(id: $id) {
        title
      }
    }
  }
`;


