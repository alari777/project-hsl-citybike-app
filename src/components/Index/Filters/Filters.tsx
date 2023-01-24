import { FC, useState } from 'react';
import { FiltersType } from '@/types/index.types';

interface FiltersComponentProps {
  pageNumber: number;
  onPageHandleClick: (
    pageNumber: number,
    filters?: FiltersType
  ) => Promise<void>;
}

const Filters: FC<FiltersComponentProps> = ({
  pageNumber,
  onPageHandleClick,
}) => {
  const [filters, setFilters] = useState({
    coveredDistance: 10,
    duration: 10,
  });

  return (
    <>
      <div>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='filters-covered-distance'>
              Covered Distance
            </span>
          </div>
          <input
            type='number'
            min={10}
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            onChange={(e) =>
              setFilters({
                ...filters,
                coveredDistance: Number(e.target.value),
              })
            }
            value={filters.coveredDistance}
          />
        </div>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='filters-duration'>
              Duration
            </span>
          </div>
          <input
            type='number'
            min={10}
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            onChange={(e) =>
              setFilters({
                ...filters,
                duration: Number(e.target.value),
              })
            }
            value={filters.duration}
          />
        </div>
        <button
          onClick={async () => {
            await onPageHandleClick(pageNumber, filters);
          }}
        >
          Apply filter
        </button>
      </div>
    </>
  );
};

export default Filters;
