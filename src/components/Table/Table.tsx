import React, { useRef, useState, useEffect } from 'react';
import { TableProps, TableColumn } from '../../modules/Table';
import Pagination from '../Pagination/index';
import styles from './Table.module.css';

const Table = <T extends {}>({ columns, data, defaultPageSize }: TableProps<T>) => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [pageSize, setPageSize] = useState(defaultPageSize);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageSizeChange = (size: number) => {
      setPageSize(size);
      setCurrentPage(1); // 更改页面大小时重置到第一页
    };

  // 排序功能实现
  const sortedData = React.useMemo(() => {
    if (sortConfig) {
      return [...data].sort((a, b) => {
        const aValue = a[sortConfig.key as keyof T];
        const bValue = b[sortConfig.key as keyof T];

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // 分页功能实现
  const paginatedData = React.useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage, pageSize]);

  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr data-scrolling="up">
            {columns.map((column) => (
              <th
                key={column.key}
                onClick={() => column.sortable && handleSort(column.key)}
                className={column.fixed ? styles[`fixed-${column.fixed}`] : ''}
                style={{ 'width': `${column.width}px` }}
                data-scrolling="up"
              >
                {column.label} {column.sortable && (sortConfig?.key === column.key ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row:any, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key} className={column.fixed ? styles[`fixed-${column.fixed}`] : ''} style={{ 'width': `${column.width}px` }}>
                  {row[column.key as keyof T]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>{currentPage === totalPages ? 'No more (⊙_⊙)?' : ''}</div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default Table;
