import { FC } from 'react';
import { GetServerSidePropsContext } from 'next';

const ManagePage: FC = () => {
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
