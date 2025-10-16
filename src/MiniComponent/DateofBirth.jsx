import React, { useState ,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {SetUserDob} from '../features/userSlice/UserSlice'

export default function DateofBirth() {
  const dispatch = useDispatch()
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [openField, setOpenField] = useState(null);

   useEffect(() => {
    if (day && month && year) {
      const fullDate = `${day} ${month} ${year}`;
      dispatch(SetUserDob(fullDate));
    }
  }, [day, month, year, dispatch]);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];
  const years = Array.from({ length: 70 }, (_, i) => 2025 - i);

  const ScrollSelect = ({ label, options, value, setValue, fieldKey }) => (
    <div className="flex flex-col items-center">
      <div
        onClick={() => setOpenField(openField === fieldKey ? null : fieldKey)}
        className={`w-28 text-center py-2 border rounded-xl cursor-pointer select-none transition ${
          value ? 'bg-black text-white' : 'bg-black text-gray-400'
        }`}
      >
        {value || label}
      </div>

      {openField === fieldKey && (
        <div className="absolute top-30 h-40 overflow-y-scroll text-white w-28 bg-black z-50">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setValue(opt);
                setOpenField(null);
              }}
              className={`block w-full py-2 text-center text-sm bg-black font-semibold ${
                value === opt
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-white hover:text-black'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Label Bar */}
      <div className="flex justify-start items-center h-[60px] w-full">
        <label htmlFor="DOB" className="mr-[11%] font-bold font-sans text-white">
          Date-Of-Birth :
        </label>

        {/* Fields */}
        <div className="flex gap-4">
          <ScrollSelect label="Day" options={days} value={day} setValue={setDay} fieldKey="day" className='text-white' />
          <ScrollSelect label="Month" options={months} value={month} setValue={setMonth} fieldKey="month" />
          <ScrollSelect label="Year" options={years} value={year} setValue={setYear} fieldKey="year" />
        </div>
      </div>
    </div>
  );
}