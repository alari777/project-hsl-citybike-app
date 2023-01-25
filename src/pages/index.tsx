import Head from 'next/head';
import { FC, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import { getTrips } from '@/pages/api/getTrips';
import homeStyles from '@/styles/Home.module.css';
import TablePagination from '@/components/Index/TablePagination/TablePagination';
import Filters from '@/components/Index/Filters/Filters';
import TripsTable from '@/components/Index/TripsTable/TripsTable';
import { FiltersType, TripType } from '@/types/index.types';

interface ManagePageProps {
  trips: TripType[];
}

const HomePage: FC<ManagePageProps> = ({ trips }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tableTrips, setTableTrips] = useState<TripType[]>(trips);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [filters, setFilters] = useState({
    coveredDistance: 10,
    duration: 10,
  });

  const onChangeFilters = (
    field: keyof typeof filters,
    value: number
  ): void => {
    setFilters({
      ...filters,
      [field]: Number(value),
    });
  };

  // This function makes request to server in order to get next N trip-records from DB.
  // + Filters.
  const onPageHandleClick = async (nextPageNumber: number): Promise<void> => {
    setIsLoading(false);
    try {
      const { coveredDistance, duration } = filters;
      const response = await fetch(
        `/api/v1/trip/${nextPageNumber}?distance=${coveredDistance}&duration=${duration}`,
        {
          method: 'GET',
        }
      );
      if (response.status === 200) {
        const result: TripType[] = await response.json();
        setPageNumber(nextPageNumber);
        setTableTrips(result);
      }
    } catch (err) {}
    setIsLoading(true);
  };

  if (!isLoading) {
    return <h2>Wait a little bit. Data are loading ...</h2>;
  }

  return (
    <>
      <Head>
        <title>City Bike app</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='main'>
        <div className={homeStyles.cla}>
          <TablePagination
            pageNumber={pageNumber}
            onPageHandleClick={onPageHandleClick}
          />
          <Filters
            pageNumber={pageNumber}
            onPageHandleClick={onPageHandleClick}
            filters={filters}
            onChangeFilters={onChangeFilters}
          />
          <TripsTable tableTrips={tableTrips} />
          <TablePagination
            pageNumber={pageNumber}
            onPageHandleClick={onPageHandleClick}
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const result = await getTrips(0);
  const trips = JSON.parse(result);
  return {
    props: { trips }, // will be passed to the page component as props
  };
}
