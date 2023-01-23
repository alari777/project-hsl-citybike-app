import { FC, FormEvent, useState } from 'react';
import Report from '@/components/Manage/Report/Report';

const AddTripsRemotely: FC = () => {
  const [urlTrip, setUrlTrip] = useState<string>('');
  const [classSpinner, setClassSpinner] = useState<boolean>(false);
  const [report, setReport] = useState<string[]>([]);

  // Add remotely trips in DB
  const importTrips = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setClassSpinner(true);
    setReport([]);
    setReport((report) => [
      ...report,
      'Wait a little bit. Data is fetching remotely ...',
    ]);
    try {
      const response = await fetch('/api/v1/download/trips/trips', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: urlTrip,
        }),
      });
      if (response.status === 201) {
        setReport((report) => [...report, 'Adding trips in DB.']);
        await response.json();
        setReport((report) => [...report, 'Trips were added successfully.']);
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
    <div>
      <form onSubmit={importTrips}>
        <div className='form-group'>
          <label htmlFor='tripsRemotelyUrl'>URL for fetching trips *</label>
          <input
            type='url'
            className='form-control'
            id='tripsRemotelyUrl'
            placeholder='Enter URL'
            required={true}
            onChange={(e) => setUrlTrip(e.target.value)}
          />
        </div>
        <button
          type='submit'
          id='submitTripsRemotely'
          className='btn btn-primary mt-3'
        >
          {classSpinner && (
            <span
              className='spinner-border spinner-border-sm'
              role='status'
              aria-hidden='true'
              id='spinnerTripsRemotely'
            ></span>
          )}
          Import trips
        </button>
        <Report reports={report} typeReport='AddTripsRemotely' />
      </form>
    </div>
  );
};

export default AddTripsRemotely;
