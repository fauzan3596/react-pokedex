import React from "react";
import ReactPaginate from "react-paginate";

function PaginationPage({ totalPage, handlePageClick, forcePage }) {
  return (
    <ReactPaginate
      previousLabel="⯇"
      nextLabel="⯈"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link text-black rounded-3"
      pageCount={totalPage}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName="pagination w-100 justify-content-center gap-2"
      pageClassName="page-item"
      pageLinkClassName="page-link text-black rounded-3"
      previousClassName="page-item"
      previousLinkClassName="page-link text-black rounded-3"
      nextClassName="page-item"
      nextLinkClassName="page-link text-black rounded-3"
      activeClassName="active border-0"
      activeLinkClassName="page-link bg-purple text-white fw-bold border-0"
      forcePage={forcePage}
    />
  );
}

export default PaginationPage;
