import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {SetUserIssue ,SetUserExpiry} from '../features/userSlice/UserSlice'

export default function IdCardDate() {
  const dispatch = useDispatch()
  const [current, setCurrent] = useState({ day: "", month: "", year: "" });
  const [expiry, setExpiry] = useState({ day: "", month: "", year: "" });
  const [openField, setOpenField] = useState(null);
  
  useEffect(() => {
    if (current.day && current.month && current.year) {
      const monthIndex = months.indexOf(current.month);
      const date = new Date(current.year, monthIndex, current.day);
      date.setFullYear(date.getFullYear() + 10);
      setExpiry({
        day: date.getDate(),
        month: months[date.getMonth()],
        year: date.getFullYear(),
      });
    }
  }, [current]);

  // 2️⃣ Dispatch current and expiry to Redux whenever they are ready
  useEffect(() => {
    if (current.day && current.month && current.year) {
      dispatch(SetUserIssue(`${current.day} ${current.month} ${current.year}`));
    }
    if (expiry.day && expiry.month && expiry.year) {
      dispatch(SetUserExpiry(`${expiry.day} ${expiry.month} ${expiry.year}`));
    }
  }, [current, expiry, dispatch]);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const years = Array.from({ length: 70 }, (_, i) => 2025 - i);

  // Auto fill expiry date (10 years after current)
  useEffect(() => {
    if (current.day && current.month && current.year) {
      const monthIndex = months.indexOf(current.month);
      const date = new Date(current.year, monthIndex, current.day);
      date.setFullYear(date.getFullYear() + 10);
      setExpiry({
        day: date.getDate(),
        month: months[date.getMonth()],
        year: date.getFullYear(),
      });
    }
  }, [current]);

  const ScrollSelect = ({ label, options, value, setValue, fieldKey }) => (
    <div className="flex flex-col items-center">
      <div
        onClick={() => setOpenField(openField === fieldKey ? null : fieldKey)}
        className={`w-28 text-center py-2 border rounded-xl cursor-pointer select-none transition ${
          value ? "bg-black text-white" : "bg-black text-gray-400"
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
                  ? "bg-blue-500 text-white"
                  : "hover:bg-white hover:text-black"
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

      {/* 1️⃣ Current Date */}
      <div className="flex justify-start items-center h-[60px] w-full shadow-md">
        <label className="mr-[10%] text-white font-bold text-lg font-sans">
          Current Date : 
        </label>
        <div className="flex gap-4">
          <ScrollSelect
            label="Day"
            options={days}
            value={current.day}
            setValue={(v) => setCurrent({ ...current, day: v })}
            fieldKey="currentDay"
          />
          <ScrollSelect
            label="Month"
            options={months}
            value={current.month}
            setValue={(v) => setCurrent({ ...current, month: v })}
            fieldKey="currentMonth"
          />
          <ScrollSelect
            label="Year"
            options={years}
            value={current.year}
            setValue={(v) => setCurrent({ ...current, year: v })}
            fieldKey="currentYear"
          />
        </div>
      </div>

      {/* 2️⃣ Date of Expiry (auto-filled) */}
      <div className="flex justify-start items-center h-[60px] w-full shadow-md">
        <label className="mr-[9%] text-white font-bold text-lg font-sans">
          Date of Expiry :
        </label>
        <div className="flex gap-4">
          <div className="w-28 py-2 text-center border rounded-xl bg-black text-white">
            {expiry.day || "Day"}
          </div>
          <div className="w-28 py-2 text-center border rounded-xl bg-black text-white">
            {expiry.month || "Month"}
          </div>
          <div className="w-28 py-2 text-center border rounded-xl bg-black text-white">
            {expiry.year || "Year"}
          </div>
        </div>
      </div>
    </div>
  );
}