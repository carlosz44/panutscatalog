import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "./ui/logo";
import Cart from "./ui/cart";
// import { slide as Menu } from "react-burger-menu";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-p-red font-roboto">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto md:p-6">
        <button
          className="items-center block px-2 py-2 text-white border border-white rounded"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          }  md:items-center w-full md:w-auto`}
        >
          <Link
            className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
            to="/categorias"
          >
            Categorías
          </Link>
        </nav>

        <Link to="/">
          <Logo className="h-8 md:h-12" />
        </Link>

        <Link to="/cart">
          <Cart className="h-10" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
