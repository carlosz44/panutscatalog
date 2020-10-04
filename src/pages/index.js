import React from "react";
import { Link, graphql } from "gatsby";
import { SEO } from "../components";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`;

const IndexPage = (query) => {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Inicio"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        <h2 className="inline-block p-3 mb-4">
          {query.data.allSite.edges[0].node.siteMetadata.description}
        </h2>
        <div>
          <Link className="p-button" to="/categorias">
            Ingresar
          </Link>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
