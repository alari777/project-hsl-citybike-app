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

type StationType = {
  id: number;
  nameFi: string;
  nameSwe: string;
  nameEn: string;
};

interface ManageComponentProps {
  stations: StationType[];
}

const AddTripsManually: FC<ManageComponentProps> = ({ stations }) => {
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
      <form>
        <div className='form-row'>
          <div className='col-md-9'>
            <label htmlFor='departureDate'>Departure date *</label>
            <input
              type='datetime-local'
              step='1'
              id='departureDate'
              className='form-control'
              required={true}
              onChange={(e) =>
                setOneTrip({
                  ...oneTrip,
                  departureDate: new Date(e.target.value),
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='returnDate'>Return date *</label>
            <input
              type='datetime-local'
              step='1'
              id='returnDate'
              className='form-control'
              required={true}
              onChange={(e) =>
                setOneTrip({
                  ...oneTrip,
                  returnDate: new Date(e.target.value),
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='departureStationId'>Departure station *</label>
            <select
              className='departureStationId'
              id='departureStationId'
              value={oneTrip.departureStationId}
            >
              {stations.map((station: any) => (
                <option key={station.id} value={station.id}>
                  {station.nameFi}
                </option>
              ))}
            </select>
          </div>
          <div className='col-md-9'>
            <label htmlFor='returnStationId'>Return station *</label>
            <select
              className='returnStationId'
              id='returnStationId'
              value={oneTrip.returnStationId}
            >
              {stations.map((station: any) => (
                <option key={station.id} value={station.id}>
                  {station.nameFi}
                </option>
              ))}
            </select>
          </div>
          <div className='col-md-9'>
            <label htmlFor='duration'>Duration *</label>
            <input
              type='number'
              className='form-control'
              id='duration'
              placeholder='Enter duration'
              required={true}
              min={10}
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='coveredDistance'>Covered distance *</label>
            <input
              type='number'
              className='form-control'
              id='coveredDistance'
              placeholder='Enter covered distance'
              required={true}
              min={10}
            />
          </div>
        </div>
        <button type='submit' className='btn btn-primary mt-3'>
          {classSpinner && (
            <span
              className='spinner-border spinner-border-sm'
              role='status'
              aria-hidden='true'
            ></span>
          )}
          Add trip
        </button>
      </form>
    </>
  );
};

export default AddTripsManually;
