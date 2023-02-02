import { FC } from 'react';
import AddStationsRemotely from '@/components/Manage/AddStationsRemotely/AddStationsRemotely';
import AddStationsManually from '@/components/Manage/AddStationsManually/AddStationsManually';
import AddTripsRemotely from '@/components/Manage/AddTripsRemotely/AddTripsRemotely';
import AddTripsManually from '@/components/Manage/AddTripsManually/AddTripsManually';
import { StationType } from '@/types/manage.types';

interface ManageComponentProps {
  stations: StationType[];
}

const Manage: FC<ManageComponentProps> = ({ stations }) => {
  const truncateTables = async ():Promise<void> => {
    try {
      const response = await fetch('/api/v1/truncate/all', {
        method: 'DELETE',
      });
      if (response.status === 200) {
        console.log('ok');
      }
    } catch (err) {}
  }
  return (
    <>
      <button onClick={truncateTables}>Truncate tables Trips and Stations</button>
      <AddStationsRemotely />
      <AddStationsManually />
      <AddTripsRemotely />
      <AddTripsManually stations={stations} />
    </>
  );
};

export default Manage;
