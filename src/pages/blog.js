import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";
import blogStyles from "./blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  const blogItems = data.allContentfulBlogPost.edges.map((edge, index) => {
    return (
      <li key={index} className={blogStyles.post}>
        <Link to={`/blog/${edge.node.slug}`}>
          <h2>{edge.node.title} </h2>
          <p>{edge.node.publishedDate}</p>
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <Head title="Blog" />
      <h1>My Blog</h1>
      <ol className={blogStyles.posts}>{blogItems}</ol>
    </Layout>
  );
};

export default BlogPage;
