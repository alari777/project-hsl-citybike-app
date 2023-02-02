import { FC, useState } from 'react';
import AddStationsRemotely from '@/components/Manage/AddStationsRemotely/AddStationsRemotely';
import AddStationsManually from '@/components/Manage/AddStationsManually/AddStationsManually';
import AddTripsRemotely from '@/components/Manage/AddTripsRemotely/AddTripsRemotely';
import AddTripsManually from '@/components/Manage/AddTripsManually/AddTripsManually';
import { StationType } from '@/types/manage.types';
import Report from '@/components/Manage/Report/Report';

interface ManageComponentProps {
  stations: StationType[];
}

const Manage: FC<ManageComponentProps> = ({ stations }) => {
  const [report, setReport] = useState<string[]>([]);
  const [classSpinner, setClassSpinner] = useState<boolean>(false);

  const truncateTables = async (): Promise<void> => {
    setClassSpinner(true);
    try {
      setReport([]);
      setReport((report) => [
        ...report,
        'Wait a little bit. Data is deleting ...',
      ]);
      const response = await fetch('/api/v1/truncate/all', {
        method: 'DELETE',
      });
      if (response.status === 201) {
        setReport((report) => [...report, 'Data was deleted.']);
      } else {
        setReport((report) => [...report, 'Tables are empty.']);
      }
    } catch (err) {
      setReport((report) => [
        ...report,
        'Data was not deleted. Something went wrong. Please try again later.',
      ]);
    }
    setClassSpinner(false);
  };
  return (
    <>
      <Report reports={report} typeReport='TruncateData' />
      <button className='btn btn-primary mb-5' onClick={truncateTables}>
        {classSpinner && (
          <span
            className='spinner-border spinner-border-sm'
            role='status'
            aria-hidden='true'
          ></span>
        )}
        Truncate tables Trips and Stations
      </button>
      <AddStationsRemotely />
      <AddStationsManually />
      <AddTripsRemotely />
      <AddTripsManually stations={stations} />
    </>
  );
};

export default Manage;
