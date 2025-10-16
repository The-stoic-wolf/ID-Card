import React, { useEffect, useState } from 'react'
import DateofBirth from '../MiniComponent/DateofBirth'
import IdCardDate from '../MiniComponent/IdCardDate'
import {SetUserName ,SetUserFatherName ,SetUserCnic ,SetUserGender ,SetUserAddress} from '../features/userSlice/UserSlice'
import { useDispatch } from 'react-redux'

function EnterInfo() {
  const dispatch = useDispatch();

  const [Name, setName] = useState('');
  const [FatherName, setFatherName] = useState('');
  const [Gender, setGender] = useState('');
  const [CNIC, setCNIC] = useState('');
  const [Address, setAddress] = useState('');

  const HandleSubmet =(e) =>{
    e.preventDefault();
  }

  const HandleName =(e) =>{
    const name = e.target.value.toUpperCase()
    setName(name)
    dispatch(SetUserName(name))
  }

  const HandleFatherName =(e) =>{
    const name = e.target.value.toUpperCase()
    setFatherName(name)
    dispatch(SetUserFatherName(name))
  }

  const HandleGender =(e) =>{
    const value = e.target.value
    setGender(value)
    dispatch(SetUserGender(value))
  }
  
  const handleCNICchange = (e) => {
  let value = e.target.value.replace(/[^0-9]/g, "");
   if (value.length === 0 && value.length === 1) {
    value = "35202";
  }

  if (value.length > 5 && value.length <= 12) {
    value = value.slice(0, 5) + "-" + value.slice(5);
  } else if (value.length > 12) {
    value = value.slice(0, 5) + "-" + value.slice(5, 12) + "-" + value.slice(12, 13);
  }
  setCNIC(value);
  dispatch(SetUserCnic(value));
  console.log("CNIC entered:", value);
  };

 const HandleAddress =(e) =>{
  const address = e.target.value
  setAddress(address)
  dispatch(SetUserAddress(address))
  console.log("address entered:", address);
 }

  return (
    <div className='w-[60%] h-[650px] flex justify-center items-center'>
        <div className='h-[600px] w-[90%]'>
          <form action="" className=' flex flex-col' onSubmit={HandleSubmet}>

            <div className='flex justify-center items-center h-[80px] w-full'>
              <div className='h-full w-[50%] flex flex-col'>
                <label className='mr-2 text-white font-bold text-lg font-sans'>Name :</label>
                <input type="text" value={Name} onChange={HandleName} className='bg-black text-white focus:border-[2px] border-white outline-none w-[80%] rounded-md border  ps-2 h-[35px] ms-2 mt-2' placeholder='Enter Name' />
              </div>
              <div className='h-full w-[50%] flex flex-col'>
                <label className='mr-2 text-white font-bold text-lg font-sans'>FatherName:</label>
                <input type="text" value={FatherName} onChange={HandleFatherName} className='bg-black text-white focus:border-[2px] border-white outline-none w-[80%] rounded-md border  ps-2 h-[35px] ms-2 mt-2' placeholder='Enter Fathername' />
              </div>
            </div>

            <div className='flex justify-center items-center h-[60px] w-full'>
              <div className='h-full w-[50%]'>
                <label htmlFor='gender' className='mr-2 text-white font-bold text-lg font-sans'>Gender:</label>
                  <select value={Gender} onChange={HandleGender} id="gender" name="gender"className='bg-black text-gray-300 w-[50%] border border-white rounded-md ps-2 h-[35px] ms-2 mt-2'>
                  <option >Select Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  </select>
              </div>
              <div className='h-full w-[50%]'>
                <label htmlFor="cnic" className="mr-2 text-white font-bold text-lg font-sans" >CNIC :</label>
                <input id="cnic" value={CNIC} onChange={handleCNICchange} type="text" maxLength="15" placeholder="35202-6789012-3" className="w-[50%] pl-2 h-[35px] border border-white text-gray-300 bg-black rounded-md outline-none mt-2 ms-2"/>
              </div>
            </div>

            <div>
              <DateofBirth/>
            </div>

            <div>
              <IdCardDate/>
            </div>

            <div className="flex flex-col h-[100px] items-start w-full">
              <label className="mr-2 text-white font-bold text-lg font-sans">Address :</label>
              <input type="text" value={Address} onChange={HandleAddress} placeholder="Enter your address" className="w-full border border-white rounded-xl p-2 bg-black focus:border-[2px] outline-none mt-2 text-white"/>
            </div>
            <button type='submit' className='mt-2 rounded-md h-[40px] w-[100px] bg-blue-600 text-white'>Submit</button>
         </form>
         
        </div>
    </div>
  )
}

export default EnterInfo
