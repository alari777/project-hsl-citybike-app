import { FC, FormEvent, useState } from 'react';

type OneStationType = {
  id: number;
  nameFi: string;
  nameSwe: string;
  nameEn: string;
  addressFi: string;
  addressSwe: string;
  cityFi: string;
  citySwe: string;
  operator: string;
  capacities: number;
  coordinateX: number;
  coordinateY: number;
};

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
    try {
      const response = await fetch('/api/v1/station/station', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(oneStation),
      });
      if (response.status === 201) {
        console.log('Add Station:', response);
      }
    } catch (err) {}
    setClassSpinner(true);
  };

  return (
    <>
      <form onSubmit={addStation}>
        <div className='form-group'>
          <label htmlFor='idStation'>ID station</label>
          <input
            type='number'
            className='form-control'
            id='idStation'
            placeholder='Enter ID station'
            onChange={(e) =>
              setOneStation({
                ...oneStation,
                id: Number(e.target.value),
              })
            }
          />

          <label htmlFor='nameFi'>Station name FI</label>
          <input
            type='text'
            className='form-control'
            id='nameFi'
            placeholder='Enter station name FI'
            onChange={(e) =>
              setOneStation({
                ...oneStation,
                nameFi: e.target.value,
              })
            }
          />
          <label htmlFor='nameSwe'>Station name SWE</label>
          <input
            type='text'
            className='form-control'
            id='nameSwe'
            placeholder='Enter station name SWE'
            onChange={(e) =>
              setOneStation({
                ...oneStation,
                nameSwe: e.target.value,
              })
            }
          />
          <label htmlFor='nameEn'>Station name EN</label>
          <input
            type='text'
            className='form-control'
            id='nameEn'
            placeholder='Enter station name EN'
            onChange={(e) =>
              setOneStation({
                ...oneStation,
                nameEn: e.target.value,
              })
            }
          />
          <label htmlFor='addressFi'>Station address FI</label>
          <input
            type='text'
            className='form-control'
            id='addressFi'
            placeholder='Enter address FI'
            onChange={(e) =>
              setOneStation({
                ...oneStation,
                addressFi: e.target.value,
              })
            }
          />
          <label htmlFor='addressSwe'>Station address SWE</label>
          <input
            type='text'
            className='form-control'
            id='addressSwe'
            placeholder='Enter address SWE'
            onChange={(e) =>
              setOneStation({
                ...oneStation,
                addressSwe: e.target.value,
              })
            }
          />
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
          <label htmlFor='capacities'>Enter capacities</label>
          <input
            type='number'
            className='form-control'
            id='capacities'
            placeholder='Enter capacities'
            onChange={(e) =>
              setOneStation({
                ...oneStation,
                capacities: Number(e.target.value),
              })
            }
          />
          <label htmlFor='coordinateX'>Enter coordinateX</label>
          <input
            type='number'
            className='form-control'
            id='coordinateX'
            placeholder='Enter coordinateX'
            onChange={(e) =>
              setOneStation({
                ...oneStation,
                coordinateX: Number(e.target.value),
              })
            }
          />
          <label htmlFor='coordinateY'>Enter coordinateY</label>
          <input
            type='number'
            className='form-control'
            id='coordinateY'
            placeholder='Enter coordinateY'
            onChange={(e) =>
              setOneStation({
                ...oneStation,
                coordinateY: Number(e.target.value),
              })
            }
          />
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
      </form>
    </>
  );
};

export default AddStationsManually;
