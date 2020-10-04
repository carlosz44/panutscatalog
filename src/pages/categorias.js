import React from "react";
import SEO from "../components/seo";
import useCategoria from "../hooks/useCategoria";
import { Link } from "gatsby";

function Categorias() {
  const cats = useCategoria();
  console.log(cats);

  return (
    <>
      <SEO title="Categorías" />

      <section className="flex flex-col items-center justify-center">
        <div className="md:w-1/2">
          <h2 className="text-center ">Seleccione una categoría</h2>
        </div>

        <ul className="py-4">
          {cats.map((cat) => (
            <li key={cat.id} className="p-button mb-2">
              <Link to={cat.slug}>{cat.nombre}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Categorias;
