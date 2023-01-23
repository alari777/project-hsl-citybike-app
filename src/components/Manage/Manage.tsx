import { FC } from 'react';
import AddStationsRemotely from '@/components/Manage/AddStationsRemotely/AddStationsRemotely';
import AddStationsManually from '@/components/Manage/AddStationsManually/AddStationsManually';
import AddTripsRemotely from '@/components/Manage/AddTripsRemotely/AddTripsRemotely';
import AddTripsManually from '@/components/Manage/AddTripsManually/AddTripsManually';

const Manage: FC = () => {
  return (
    <>
      <AddStationsRemotely />
      <AddStationsManually />
      <AddTripsRemotely />
      <AddTripsManually />
    </>
  );
};

export default Manage;
