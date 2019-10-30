import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        I'm Neal. A full-stack developer with his BS in Computer Engineering
        from MSOE. Born and Raised in Chicago, IL.
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
