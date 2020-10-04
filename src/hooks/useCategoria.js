import { graphql, useStaticQuery } from "gatsby";

export default function useCategoria() {
  const data = useStaticQuery(graphql`
    query GET_CATEGORIES {
      allWcProductsCategories(filter: { wordpress_parent_id: { eq: 0 } }) {
        nodes {
          name
          slug
          id
          menu_order
        }
      }
    }
  `);

  const sorted = data.allWcProductsCategories.nodes
    .map((cat) => ({
      id: cat.id,
      order: cat.menu_order,
      nombre: cat.name,
      slug: cat.slug,
    }))
    .sort((a, b) => (a.order > b.order ? 1 : -1));

  return sorted;
}
