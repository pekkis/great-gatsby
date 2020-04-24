import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Pekkiksen mahtisivu</h1>
    <p>Pekkis on suurmiäs</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
