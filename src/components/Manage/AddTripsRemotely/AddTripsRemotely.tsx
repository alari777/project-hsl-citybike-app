import { FC, useState } from 'react';
import Report from '@/components/Manage/Report/Report';

const AddTripsRemotely: FC = () => {
  const [urlTrip, setUrlTrip] = useState<string>('');
  const [classSpinner, setClassSpinner] = useState<boolean>(false);
  const [report, setReport] = useState<string[]>([]);

  return (
    <>
      <h1>Add Trips</h1>
    </>
  );
};

export default AddTripsRemotely;
