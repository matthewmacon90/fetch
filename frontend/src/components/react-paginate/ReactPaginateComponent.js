import { useState } from 'react';
import Items from './items/Items';
import ReactPaginate from 'react-paginate';
import './ReactPaginateStyles.css';

const ReactPaginateComponent = ({ items, itemsPerPage, setUserFilteredItems, classNames, isLastPage }) => {
    const [ itemOffset, setItemOffset ] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newPage = event.selected;
        if(newPage === pageCount - 1) {
            isLastPage();
        };
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
      };

    return (
        <div className='react-paginate-container'>
            <div className={`${classNames[0]}`}>
                <Items currentItems={currentItems} setUserFilteredItems={setUserFilteredItems} />
            </div>
            <div className='pagination-container'>
                <ReactPaginate
                    className='pagination'
                    breakLabel="..."
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< Previous"
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>
        </div>
    )
};

export default ReactPaginateComponent;