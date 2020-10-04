exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query GET_CATEGORY_SLUG {
      allWcProductsCategories(filter: { wordpress_parent_id: { eq: 0 } }) {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("No hubo resultados ", result.errors);
  }

  const cats = result.data.allWcProductsCategories.nodes;

  cats.forEach((cat) => {
    actions.createPage({
      path: `/categorias/${cat.slug}`,
      component: require.resolve("./src/components/templates/Category.js"),
      context: {
        slug: cat.slug,
      },
    });
  });
};
