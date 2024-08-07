import React, { useState, useEffect } from 'react';
import './portfolio.css';

import PortfolioItem from './PortfolioItem';
import portfolioData from '../../data/portfolioData';
import ReactPaginate from 'react-paginate';

const Portfolio = () => {
  const [itemsPerRow, setItemsPerRow] = useState(getItemsPerRow());
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const handleResize = () => {
      setItemsPerRow(getItemsPerRow());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getItemsPerRow() {
    if (window.innerWidth >= 1024) {
      return 4;
    } else if (window.innerWidth >= 600) {
      return 6;
    } else {
      return 1;
    }
  }

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = portfolioData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(portfolioData.length / itemsPerPage);

  return (
    <section id="portfolio">
      <h5>you can check all this in more detail on my</h5>
      <h2>Portifolio</h2>

      <div className="container portfolio__container">
        {currentItems.map(({ id, image, tecs, title, resume, link, demo }) => (
          <PortfolioItem key={id} image={image} tecs={tecs} title={title} resume={resume} link={link} demo={demo} />
        ))}
      </div>

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </section>
  );
};

export default Portfolio;
