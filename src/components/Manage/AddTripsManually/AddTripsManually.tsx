import { FC, FormEvent, useState } from 'react';
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

  const addTrip = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setClassSpinner(true);
    setReport([]);
    setReport((report) => [...report, 'Wait a little bit. Trip is adding ...']);
    try {
      const response = await fetch('/api/v1/trip/trip', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(oneTrip),
      });
      if (response.status === 201) {
        setReport((report) => [...report, 'Trip was added successfully.']);
      } else {
        setReport((report) => [...report, 'Trip was not added.']);
      }
    } catch (err) {
      setReport((report) => [
        ...report,
        'Trip was not added. Something went wrong. Please try again later.',
      ]);
    }
    setClassSpinner(false);
  };

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
              onChange={(e) =>
                setOneTrip({
                  ...oneTrip,
                  departureStationId: Number(e.target.value),
                })
              }
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
              onChange={(e) =>
                setOneTrip({
                  ...oneTrip,
                  returnStationId: Number(e.target.value),
                })
              }
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
              onChange={(e) =>
                setOneTrip({
                  ...oneTrip,
                  duration: Number(e.target.value),
                })
              }
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
              onChange={(e) =>
                setOneTrip({
                  ...oneTrip,
                  coveredDistance: Number(e.target.value),
                })
              }
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
