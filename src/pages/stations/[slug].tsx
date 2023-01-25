import { FC } from 'react';
import { StationType } from '@/types/manage.types';

interface SingleStationPageProps {
  stations: StationType[];
}

const SingleStationPage: FC<SingleStationPageProps> = ({ stations }) => {
  return (
    <>
      <h1>Slug Station Page</h1>
    </>
  );
};

export default SingleStationPage;
