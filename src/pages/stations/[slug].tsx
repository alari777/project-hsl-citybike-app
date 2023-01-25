import { FC } from 'react';
import { StationType } from '@/types/manage.types';
import { GetServerSidePropsContext } from 'next';
import { getSlugStation } from '@/pages/api/getSlugStation';

interface SingleStationPageProps {
  stations: StationType[];
}

const SingleStationPage: FC<SingleStationPageProps> = ({ stations }) => {
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>FID</th>
            <th scope='col'>Name FI</th>
            <th scope='col'>Name SWE</th>
            <th scope='col'>Name EN</th>
            <th scope='col'>Address FI</th>
            <th scope='col'>Address SWE</th>
            <th scope='col'>Amount starting</th>
            <th scope='col'>Amount ending</th>
          </tr>
        </thead>
        <tbody>
          {stations &&
            stations.map((station: StationType) => (
              <tr key={station.nameFi}>
                <td>{station.fid}</td>
                <td>{station.nameFi}</td>
                <td>{station.nameSwe}</td>
                <td>{station.nameEn}</td>
                <td>{station.addressFi}</td>
                <td>{station.addressSwe}</td>
                <td>
                  {station._count.Trips_Trips_departureStationIdToStations}
                </td>
                <td>{station._count.Trips_Trips_returnStationIdToStations}</td>
              </tr>
            ))}
        </tbody>
      </table>
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
