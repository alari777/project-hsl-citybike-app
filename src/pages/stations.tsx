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
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>FID</th>
            <th scope='col'>Name FI</th>
            <th scope='col'>Name SWE</th>
            <th scope='col'>Name EN</th>
            <th scope='col'>Address FI</th>
            <th scope='col'>Address SWE</th>
            <th scope='col'>City FI</th>
            <th scope='col'>City SWE</th>
            <th scope='col'>Capacities</th>
            <th scope='col'>Coordinate X</th>
            <th scope='col'>Coordinate Y</th>
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
                <td>{station.cityFi}</td>
                <td>{station.citySwe}</td>
                <td>{station.capacities}</td>
                <td>{station.coordinateX}</td>
                <td>{station.coordinateY}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default StationsPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Getting stations
  const stations = await getStations();
  return {
    props: { stations: JSON.parse(stations) }, // will be passed to the page component as props
  };
}
