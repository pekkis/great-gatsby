import React, {useEffect} from "react";
import { graphql } from "gatsby";
import Img from '../components/Img'

const Page = props => {
  const {
    data: {
      wpapi: { page },
    },
  } = props;

  console.log(page)

  useEffect(() => {
    console.log('HELLUREI?!!?')
  }, [])

  return (
    <div>
      <h2>{decodeURI(page.title)}</h2>
      <div dangerouslySetInnerHTML={{__html: page.content}} />
      {page.featuredImage && <Img data={page.featuredImage} />}
    </div>
  );
};

export default Page

export const query = graphql`
  query PageQuery($id: ID!) {
    wpapi {
      page(id: $id) {
        title
        content
        featuredImage {
          srcSet
          altText
          title
        }
      }
    }
  }
`;


