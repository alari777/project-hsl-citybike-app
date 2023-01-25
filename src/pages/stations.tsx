import { FC } from 'react';
import { StationType } from '@/types/manage.types';
import { GetServerSidePropsContext } from 'next';
import { getStations } from '@/pages/api/getStations';

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Getting station
  const stations = await getStations();
  return {
    props: { stations: JSON.parse(stations) }, // will be passed to the page component as props
  };
}
