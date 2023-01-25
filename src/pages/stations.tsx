import { FC } from 'react';
import { StationType } from '@/types/manage.types';

interface StationsPageProps {
  stations: StationType[];
}

const StationsPage: FC<StationsPageProps> = ({ stations }) => {
  return (
    <>
      <h1>Stations Page</h1>
    </>
  );
};

export default StationsPage;
