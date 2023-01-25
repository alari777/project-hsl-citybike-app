import { FC } from 'react';
import { FiltersType } from '@/types/index.types';
import styles from '@/components/Index/Filters/Filters.module.scss';

interface FiltersComponentProps {
  pageNumber: number;
  onPageHandleClick: (pageNumber: number) => Promise<void>;
  filters: FiltersType;
  onChangeFilters: (
    field: 'coveredDistance' | 'duration',
    value: number
  ) => void;
}

const Filters: FC<FiltersComponentProps> = ({
  pageNumber,
  onPageHandleClick,
  filters,
  onChangeFilters,
}) => {
  return (
    <>
      <div className={styles.filters}>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='filters-covered-distance'>
              Covered Distance in meters
            </span>
          </div>
          <input
            type='number'
            min={10}
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            onChange={(e) =>
              onChangeFilters('coveredDistance', Number(e.target.value))
            }
            value={filters.coveredDistance}
          />
        </div>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='filters-duration'>
              Duration in seconds
            </span>
          </div>
          <input
            type='number'
            min={10}
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            onChange={(e) =>
              onChangeFilters('duration', Number(e.target.value))
            }
            value={filters.duration}
          />
        </div>
        <button
          onClick={async () => {
            await onPageHandleClick(pageNumber);
          }}
        >
          Apply filter
        </button>
      </div>
    </>
  );
};

export default Filters;
