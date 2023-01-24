import { FC } from 'react';
import { GetServerSidePropsContext } from 'next';
import { getStations } from '@/pages/api/getStations';
import Manage from '@/components/Manage/Manage';
import { StationType } from '@/types/manage.types';

interface ManagePageProps {
  stations: StationType[];
}

const ManagePage: FC<ManagePageProps> = ({ stations }) => {
  return (
    <>
      <h1>Manage page: add Stations and Trips</h1>
      <Manage stations={stations} />
    </>
  );
};

export default ManagePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Getting station names and IDs
  const stations = await getStations();
  return {
    props: { stations: JSON.parse(stations) }, // will be passed to the page component as props
  };
}
