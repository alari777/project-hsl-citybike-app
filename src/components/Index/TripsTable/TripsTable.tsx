import { FC } from 'react';
import { formatTime } from '@/utils/formatTime/formatTime';
import { TripType } from '@/types/index.types';

interface TripsTableComponentProps {
  tableTrips: TripType[];
  pageNumber: number;
}

const TripsTable: FC<TripsTableComponentProps> = ({
  tableTrips,
  pageNumber,
}) => {
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>ID</th>
            {/*<th scope='col'>Departure Date</th>*/}
            {/*<th scope='col'>Return Date</th>*/}
            <th scope='col'>Departure Station</th>
            <th scope='col'>Return Station</th>
            <th scope='col'>Covered Distance</th>
            <th scope='col'>Duration</th>
          </tr>
        </thead>
        <tbody>
          {tableTrips &&
            tableTrips.map((trip: TripType, index: number) => (
              <tr key={trip.id}>
                <th scope='row'>{pageNumber * 100 + index + 1}</th>
                <td>{trip.id}</td>
                {/*<td>{formatTime(trip.departureDate)}</td>*/}
                {/*<td>{formatTime(trip.returnDate)}</td>*/}
                <td>
                  {trip.Stations_Trips_departureStationIdToStations.nameFi}
                </td>
                <td>{trip.Stations_Trips_returnStationIdToStations.nameFi}</td>
                <td>{(Number(trip.coveredDistance) / 1000).toFixed(2)} km</td>
                <td>
                  {new Date(Number(trip.duration) * 1000)
                    .toISOString()
                    .substring(11, 19)}
                  h
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TripsTable;
