import { FC } from 'react';
import AddStationsRemotely from '@/components/Manage/AddStationsRemotely/AddStationsRemotely';
import AddStationsManually from '@/components/Manage/AddStationsManually/AddStationsManually';
import AddTripsRemotely from '@/components/Manage/AddTripsRemotely/AddTripsRemotely';

const Manage: FC = () => {
  return (
    <>
      <AddStationsRemotely />
      <AddStationsManually />
      <AddTripsRemotely />
    </>
  );
};

export default Manage;
