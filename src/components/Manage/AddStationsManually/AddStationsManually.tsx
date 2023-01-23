import { FC } from 'react';

const AddStationsManually: FC = () => {
  return (
    <>
      <form>
        <div className='form-group'>
          <label htmlFor='idStation'>ID station</label>
          <input
            type='text'
            className='form-control'
            id='idStation'
            placeholder='Enter ID station'
          />

          <label htmlFor='nameFi'>Station name FI</label>
          <input
            type='text'
            className='form-control'
            id='nameFi'
            placeholder='Enter station name FI'
          />
          <label htmlFor='nameSwe'>Station name SWE</label>
          <input
            type='text'
            className='form-control'
            id='nameSwe'
            placeholder='Enter station name SWE'
          />
          <label htmlFor='nameEn'>Station name EN</label>
          <input
            type='text'
            className='form-control'
            id='nameEn'
            placeholder='Enter station name EN'
          />
        </div>
        <button type='submit' className='btn btn-primary mt-3'>
          Add station
        </button>
      </form>
    </>
  );
};

export default AddStationsManually;
