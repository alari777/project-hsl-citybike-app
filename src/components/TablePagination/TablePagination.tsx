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
            <div
              className='page-link'
              style={{ cursor: 'pointer' }}
              onClick={async () => {
                let nextPageNumber = pageNumber - 1;
                if (nextPageNumber < 0) nextPageNumber = 0;
                await onPageHandleClick(nextPageNumber);
              }}
            >
              Previous
            </div>
          </li>

          <li className='page-item active'>
            <a className='page-link sr-only' href='#'>
              {pageNumber}
            </a>
          </li>

          <li className='page-item'>
            <div
              className='page-link'
              style={{ cursor: 'pointer' }}
              onClick={async () => {
                const nextPageNumber = pageNumber + 1;
                await onPageHandleClick(nextPageNumber);
              }}
            >
              Next
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TablePagination;
