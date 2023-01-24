import { FC } from 'react';

interface TablePaginationComponentProps {
  pageNumber: number;
  onPageHandleClick: (pageNumber: number) => Promise<void>;
}

const TablePagination: FC<TablePaginationComponentProps> = ({
  pageNumber,
  onPageHandleClick,
}) => {
  return (
    <>
      <nav aria-label='...'>
        <ul className='pagination'>
          <li className='page-item'>
            <div className='page-link' style={{ cursor: 'pointer' }}>
              Previous
            </div>
          </li>

          <li className='page-item active'>
            <a className='page-link sr-only' href='#'>
              {pageNumber}
            </a>
          </li>

          <li className='page-item'>
            <div className='page-link' style={{ cursor: 'pointer' }}>
              Next
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TablePagination;
