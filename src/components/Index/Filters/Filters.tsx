import { FC } from 'react';

interface FiltersComponentProps {}

const Filters: FC<FiltersComponentProps> = ({}) => {
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
          />
        </div>
        <button onClick={() => console.log('filters')}>Apply filter</button>
      </div>
    </>
  );
};

export default Filters;
