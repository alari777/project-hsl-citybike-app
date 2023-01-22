import { FC } from 'react';
import { GetServerSidePropsContext } from 'next';
import { getStations } from '@/pages/api/getStations';

type StationType = {
  id: number;
  nameFi: string;
  nameSwe: string;
  nameEn: string;
};

interface ManagePageProps {
  stations: StationType[];
}

const ManagePage: FC<ManagePageProps> = ({ stations }) => {
  return <h1>Manage page: add Stations and Trips</h1>;
};

export default ManagePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Getting station names and IDs
  const stations = await getStations();
  return {
    props: { stations: stations }, // pass these data to props
  };
}
