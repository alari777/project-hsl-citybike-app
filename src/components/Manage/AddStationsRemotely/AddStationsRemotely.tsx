import { FC, useState } from 'react';

const AddStationsRemotely: FC = () => {
  const [urlStation, setUrlStation] = useState<string>('');
  const [classSpinner, setClassSpinner] = useState<boolean>(false);

  // Add remotely stations in DB
  const importStations = async (): Promise<void> => {
    setClassSpinner(true);
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
    setClassSpinner(false);
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
          onChange={(e) => setUrlStation(e.target.value)}
        />
      </div>
      <button
        type='button'
        onClick={importStations}
        className='btn btn-primary mt-3'
      >
        {classSpinner && (
          <span
            className='spinner-border spinner-border-sm'
            role='status'
            aria-hidden='true'
          ></span>
        )}
        Import stations
      </button>
    </>
  );
};

export default AddStationsRemotely;
