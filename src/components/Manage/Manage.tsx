import { FC } from 'react';
import AddStationsRemotely from '@/components/Manage/AddStationsRemotely/AddStationsRemotely';
import AddStationsManually from '@/components/Manage/AddStationsManually/AddStationsManually';

const Manage: FC = () => {
  return (
    <>
      <AddStationsRemotely />
      <AddStationsManually />
    </>
  );
};

export default Manage;
