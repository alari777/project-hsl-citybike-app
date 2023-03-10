import { FC } from 'react';
import AddStationsRemotely from '@/components/Manage/AddStationsRemotely/AddStationsRemotely';
import AddStationsManually from '@/components/Manage/AddStationsManually/AddStationsManually';
import AddTripsRemotely from '@/components/Manage/AddTripsRemotely/AddTripsRemotely';
import AddTripsManually from '@/components/Manage/AddTripsManually/AddTripsManually';
import { StationType } from '@/types/manage.types';
import TruncateTables from '@/components/Manage/TruncateTables/TruncateTables';

interface ManageComponentProps {
  stations: StationType[];
}

const Manage: FC<ManageComponentProps> = ({ stations }) => {
  return (
    <>
      <TruncateTables />
      <AddStationsRemotely />
      <AddStationsManually />
      <AddTripsRemotely />
      <AddTripsManually stations={stations} />
    </>
  );
};

export default Manage;
