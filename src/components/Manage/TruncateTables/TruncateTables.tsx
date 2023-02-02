import { FC, useState } from 'react';
import Report from '@/components/Manage/Report/Report';

const TruncateTables: FC = () => {
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
      if (response.status === 204) {
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
    </>
  );
};

export default TruncateTables;
