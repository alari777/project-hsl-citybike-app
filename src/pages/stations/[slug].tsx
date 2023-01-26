import { FC } from 'react';
import { StationType } from '@/types/manage.types';
import { GetServerSidePropsContext } from 'next';
import { getSlugStation } from '@/pages/api/getSlugStation';

interface SingleStationPageProps {
  stations: StationType[];
  averageDepartureDistance: {
    dCoveredDistance: number;
  }[];
  averageReturnDistance: {
    rCoveredDistance: number;
  }[];
}

const SingleStationPage: FC<SingleStationPageProps> = ({
  stations,
  averageDepartureDistance,
  averageReturnDistance,
}) => {
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
            <th scope='col'>Average staring distance</th>
            <th scope='col'>Amount ending</th>
            <th scope='col'>Average ending distance</th>
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
                <td>
                  {station._count.Trips_Trips_departureStationIdToStations &&
                    (
                      averageDepartureDistance[0].dCoveredDistance /
                      station._count.Trips_Trips_departureStationIdToStations /
                      1000
                    ).toFixed(2)}
                  km
                </td>
                <td>{station._count.Trips_Trips_returnStationIdToStations}</td>
                <td>
                  {station._count.Trips_Trips_returnStationIdToStations &&
                    (
                      averageReturnDistance[0].rCoveredDistance /
                      station._count.Trips_Trips_returnStationIdToStations /
                      1000
                    ).toFixed(2)}
                  km
                </td>
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

  const results = JSON.parse(stations);

  return {
    props: {
      stations: results[0],
      averageDepartureDistance: results[1],
      averageReturnDistance: results[2],
    }, // will be passed to the page component as props
  };
}
