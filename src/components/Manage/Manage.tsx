import { FC } from 'react';
import AddStationsRemotely from '@/components/Manage/AddStationsRemotely/AddStationsRemotely';
import AddStationsManually from '@/components/Manage/AddStationsManually/AddStationsManually';
import AddTripsRemotely from '@/components/Manage/AddTripsRemotely/AddTripsRemotely';
import AddTripsManually from '@/components/Manage/AddTripsManually/AddTripsManually';

type StationType = {
  id: number;
  nameFi: string;
  nameSwe: string;
  nameEn: string;
};

interface ManageComponentProps {
  stations: StationType[];
}

const Manage: FC<ManageComponentProps> = ({ stations }) => {
  return (
    <>
      <AddStationsRemotely />
      <AddStationsManually />
      <AddTripsRemotely />
      <AddTripsManually stations={stations} />
    </>
  );
};

export default Manage;
