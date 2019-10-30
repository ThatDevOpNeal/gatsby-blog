import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>My name is Neal, a full-stack developer living in Chicago</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me!</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
