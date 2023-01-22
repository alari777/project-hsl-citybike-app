import { FC, useState } from 'react';

const AddStationsRemotely: FC = () => {
  const [urlStation, setUrlStation] = useState<string>('');

  // Add remotely stations in DB
  const importStations = async (): Promise<void> => {
    try {
      const response = await fetch('/api/v1/download/stations/stations', {
        method: 'POST',
        body: JSON.stringify({
          url: urlStation,
        }),
      });
      if (response.status === 201) {
        await response.json();
      }
    } catch (err) {}
  };

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
