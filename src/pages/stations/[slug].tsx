import { FC } from 'react';
import { StationType } from '@/types/manage.types';
import { GetServerSidePropsContext } from 'next';

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query;
  const slug = query.slug as string;
  const stations = await getSlugStation(slug);

  return {
    props: { stations: JSON.parse(stations) }, // will be passed to the page component as props
  };
}
