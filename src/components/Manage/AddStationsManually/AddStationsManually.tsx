import { FC, FormEvent, useState } from 'react';
import Report from '@/components/Manage/Report/Report';
import { OneStationType } from '@/types/manage.types';

const AddStationsManually: FC = () => {
  const [classSpinner, setClassSpinner] = useState<boolean>(false);
  const [report, setReport] = useState<string[]>([]);
  const [oneStation, setOneStation] = useState<OneStationType>({
    id: 0,
    nameFi: '',
    nameSwe: '',
    nameEn: '',
    addressFi: '',
    addressSwe: '',
    cityFi: '',
    citySwe: '',
    operator: '',
    capacities: 0,
    coordinateX: 0,
    coordinateY: 0,
  });

  // Add station in DB manually.
  // Information with station is storing in `oneStation`
  const addStation = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setClassSpinner(true);
    setReport([]);
    setReport((report) => [
      ...report,
      'Wait a little bit. Station is adding ...',
    ]);
    try {
      const response = await fetch('/api/v1/stations/station', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(oneStation),
      });
      if (response.status === 201) {
        setReport((report) => [...report, 'Station was added successfully.']);
      } else {
        setReport((report) => [...report, 'Station was not added.']);
      }
    } catch (err) {
      setReport((report) => [
        ...report,
        'Station was not added. Something went wrong. Please try again later.',
      ]);
    }
    setClassSpinner(false);
  };

  return (
    <>
      <form onSubmit={addStation}>
        <div className='form-row'>
          <div className='col-md-9'>
            <label htmlFor='idStation'>ID station *</label>
            <input
              type='number'
              className='form-control'
              id='idStation'
              placeholder='Enter ID station'
              required={true}
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  id: Number(e.target.value),
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='nameFi'>Station name FI *</label>
            <input
              type='text'
              className='form-control'
              id='nameFi'
              placeholder='Enter station name FI'
              required={true}
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  nameFi: e.target.value,
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='nameSwe'>Station name SWE *</label>
            <input
              type='text'
              className='form-control'
              id='nameSwe'
              placeholder='Enter station name SWE'
              required={true}
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  nameSwe: e.target.value,
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='nameEn'>Station name EN *</label>
            <input
              type='text'
              className='form-control'
              id='nameEn'
              placeholder='Enter station name EN'
              required={true}
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  nameEn: e.target.value,
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='addressFi'>Station address FI *</label>
            <input
              type='text'
              className='form-control'
              id='addressFi'
              placeholder='Enter address FI'
              required={true}
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  addressFi: e.target.value,
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='addressSwe'>Station address SWE *</label>
            <input
              type='text'
              className='form-control'
              id='addressSwe'
              placeholder='Enter address SWE'
              required={true}
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  addressSwe: e.target.value,
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='cityFi'>Enter city FI</label>
            <input
              type='text'
              className='form-control'
              id='cityFi'
              placeholder='Enter city FI'
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  cityFi: e.target.value,
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='citySwe'>Enter city SWE</label>
            <input
              type='text'
              className='form-control'
              id='citySwe'
              placeholder='Enter city SWE'
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  citySwe: e.target.value,
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='operator'>Enter operator</label>
            <input
              type='text'
              className='form-control'
              id='operator'
              placeholder='Enter operator'
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  operator: e.target.value,
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='capacities'>Enter capacities *</label>
            <input
              type='number'
              className='form-control'
              id='capacities'
              placeholder='Enter capacities'
              required={true}
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  capacities: Number(e.target.value),
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='coordinateX'>Enter coordinateX *</label>
            <input
              type='number'
              className='form-control'
              id='coordinateX'
              placeholder='Enter coordinateX'
              required={true}
              step={0.0000001}
              max={99}
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  coordinateX: parseFloat(e.target.value),
                })
              }
            />
          </div>
          <div className='col-md-9'>
            <label htmlFor='coordinateY'>Enter coordinateY *</label>
            <input
              type='number'
              className='form-control'
              id='coordinateY'
              placeholder='Enter coordinateY'
              required={true}
              step={0.0000001}
              max={99}
              onChange={(e) =>
                setOneStation({
                  ...oneStation,
                  coordinateY: parseFloat(e.target.value),
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
          Add station
        </button>
        <Report reports={report} typeReport='AddStationsManually' />
      </form>
    </>
  );
};

export default AddStationsManually;
