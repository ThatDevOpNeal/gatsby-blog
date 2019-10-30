import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <ul>
        <li>
          Email:{" "}
          <a
            href="mailto: nealbharucha@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send Email
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/nealbharucha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My LinkedIn
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default ContactPage;
