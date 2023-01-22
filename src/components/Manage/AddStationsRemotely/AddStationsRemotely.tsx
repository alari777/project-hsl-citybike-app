import { FC } from 'react';

const AddStationsRemotely: FC = () => {
  return (
    <>
      <div className='form-group'>
        <label htmlFor='stationsRemotelyUrl'>URL for fetching stations</label>
        <input
          type='url'
          className='form-control'
          id='stationsRemotelyUrl'
          placeholder='Enter URL'
        />
      </div>
      <button className='btn btn-primary mt-3'>Import stations</button>
    </>
  );
};

export default AddStationsRemotely;
