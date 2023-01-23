import { FC, useState } from 'react';
import Report from '@/components/Manage/Report/Report';

type OneTripType = {
  departureDate: Date | undefined;
  returnDate: Date | undefined;
  departureStationId: number;
  returnStationId: number;
  coveredDistance: number;
  duration: number;
};

const AddTripsManually: FC = () => {
  const [classSpinner, setClassSpinner] = useState<boolean>(false);
  const [report, setReport] = useState<string[]>([]);
  const [oneTrip, setOneTrip] = useState<OneTripType>({
    departureDate: undefined,
    returnDate: undefined,
    departureStationId: 0,
    returnStationId: 0,
    coveredDistance: 0,
    duration: 0,
  });
  return (
    <>
      <form></form>
    </>
  );
};

export default AddTripsManually;
