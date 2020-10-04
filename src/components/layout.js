import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "./header";
import "../css/style.css";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />

      <main className="flex-1 w-full max-w-screen-xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-p-grey">
        <nav className="flex justify-center max-w-screen-xl p-4 mx-auto md:p-8">
          <p className="text-white">
            Creado por{` `}
            <a
              className="font-bold no-underline p-transitions hover:text-p-red"
              href="https://panuts.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Panuts.com
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
