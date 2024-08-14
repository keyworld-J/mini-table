import React from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange,pageSize,onPageSizeChange}) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onPageSizeChange(Number(event.target.value));
  };


return (
      <div className={styles.paginationContainer}>
      <select value={pageSize} onChange={handlePageSizeChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      <button
        disabled={currentPage === 1}
        onClick={handlePreviousClick}
      >
        Previous
      </button>
      <span>&nbsp;&nbsp; {`Page ${currentPage} of ${totalPages}`} &nbsp;&nbsp;</span>
      <button
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
