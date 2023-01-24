import { FC } from 'react';
import { formatTime } from '@/utils/formatTime/formatTime';

type TripType = {
  id: number;
  departureDate: string;
  coveredDistance: string;
  duration: string;
  returnDate: string;
  departureStationId?: number;
  returnStationId?: number;
  Stations_Trips_departureStationIdToStations: { nameFi: string };
  Stations_Trips_returnStationIdToStations: { nameFi: string };
};

interface TripsTableComponentProps {
  tableTrips: TripType[];
}

const TripsTable: FC<TripsTableComponentProps> = ({ tableTrips }) => {
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>ID</th>
            <th scope='col'>Departure Date</th>
            <th scope='col'>Return Date</th>
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
                <th scope='row'>{index + 1}</th>
                <td>{trip.id}</td>
                <td>{formatTime(trip.departureDate)}</td>
                <td>{formatTime(trip.returnDate)}</td>
                <td>
                  {trip.Stations_Trips_departureStationIdToStations.nameFi}
                </td>
                <td>{trip.Stations_Trips_returnStationIdToStations.nameFi}</td>
                <td>{trip.coveredDistance}m</td>
                <td>{trip.duration}s</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TripsTable;
