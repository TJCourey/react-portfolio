import React, { useState } from "react";
import MyNav from "./navbar/navbar";
import Home from "./home/home";
import Bio from "./bio/bio";
import Portfolio from "./portfolio/portfolio";
import Contact from "./contact/contact";

function NavHandler() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Bio") {
      return <Bio />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <MyNav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
export default NavHandler;
