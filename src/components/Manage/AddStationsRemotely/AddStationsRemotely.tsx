import { FC, useState } from 'react';
import Report from '@/components/Manage/Report/Report';

const AddStationsRemotely: FC = () => {
  const [urlStation, setUrlStation] = useState<string>('');
  const [classSpinner, setClassSpinner] = useState<boolean>(false);
  const [report, setReport] = useState<string[]>([]);

  // Add remotely stations in DB
  const importStations = async (): Promise<void> => {
    setClassSpinner(true);
    setReport([]);
    setReport((report) => [
      ...report,
      'Wait a little bit. Data is fetching remotely ...',
    ]);
    try {
      const response = await fetch('/api/v1/download/stations/stations', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: urlStation,
        }),
      });
      if (response.status === 201) {
        setReport((report) => [...report, 'Adding data in DB.']);
        await response.json();
        setReport((report) => [...report, 'Data was added successfully.']);
      }
    } catch (err) {
      setReport((report) => [
        ...report,
        'Data was not added. Something went wrong. Please try again later.',
      ]);
    }
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
      <Report reports={report} />
    </>
  );
};

export default AddStationsRemotely;
