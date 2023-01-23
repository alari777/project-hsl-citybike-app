import { FC, useState } from 'react';
import Report from '@/components/Manage/Report/Report';

const AddTripsRemotely: FC = () => {
  const [urlTrip, setUrlTrip] = useState<string>('');
  const [classSpinner, setClassSpinner] = useState<boolean>(false);
  const [report, setReport] = useState<string[]>([]);

  return (
    <div>
      <form>
        <div className='form-group'>
          <label htmlFor='tripsRemotelyUrl'>URL for fetching trips *</label>
          <input
            type='url'
            className='form-control'
            id='tripsRemotelyUrl'
            placeholder='Enter URL'
            required={true}
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
