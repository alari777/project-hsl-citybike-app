import { FC, useState } from 'react';
import { StationType } from '@/types/manage.types';
import { GetServerSidePropsContext } from 'next';
import { getStations } from '@/pages/api/getStations';
import Link from 'next/link';
import TablePagination from '@/components/TablePagination/TablePagination';

interface StationsPageProps {
  stations: StationType[];
}

const StationsPage: FC<StationsPageProps> = ({ stations }) => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tableStations, setTableStations] = useState<StationType[]>(stations);

  // This function makes request to server in order to get next N station-records from DB.
  const onPageHandleClick = async (nextPageNumber: number): Promise<void> => {
    setIsLoading(false);
    try {
      const response = await fetch(`/api/v1/stations/${nextPageNumber}`, {
        method: 'GET',
      });
      if (response.status === 200) {
        const result: StationType[] = await response.json();
        setPageNumber(nextPageNumber);
        setTableStations(result);
      }
    } catch (err) {}
    setIsLoading(true);
  };

  if (!isLoading) {
    return <h2>Wait a little bit. Data are loading ...</h2>;
  }

  return (
    <>
      <TablePagination
        pageNumber={pageNumber}
        onPageHandleClick={onPageHandleClick}
      />
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>FID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Address</th>
            <th scope='col'>City</th>
            <th scope='col'>Capacities</th>
            <th scope='col'>Coordinates</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableStations &&
            tableStations.map((station: StationType) => (
              <tr key={station.nameFi}>
                <td>{station.fid}</td>
                <td>
                  <ul>
                    <li>FI: {station.nameFi}</li>
                    <li>SWE: {station.nameSwe}</li>
                    <li>EN: {station.nameEn}</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>FI: {station.addressFi}</li>
                    <li>SWE: {station.addressSwe}</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>FI: {station.cityFi}</li>
                    <li>SWE: {station.citySwe}</li>
                  </ul>
                </td>
                <td>{station.capacities}</td>
                <td>
                  <ul>
                    <li>X: {station.coordinateX}</li>
                    <li>Y: {station.coordinateY}</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>
                      <Link href={`/stations/${station.id}`}>View</Link>
                    </li>
                    <li>Delete (soon)</li>
                    <li>Update (soon)</li>
                  </ul>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <TablePagination
        pageNumber={pageNumber}
        onPageHandleClick={onPageHandleClick}
      />
    </>
  );
};

export default StationsPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Getting stations
  const stations = await getStations(0);
  return {
    props: { stations: JSON.parse(stations) }, // will be passed to the page component as props
  };
}
