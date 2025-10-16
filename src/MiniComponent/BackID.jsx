import React from 'react'
import { useSelector } from 'react-redux'

function BackID() {

 const Address = useSelector((state) => state.user.Address)
 const CNIC = useSelector((state) => state.user.CNICNo)
  return (
    <div className='flex flex-col bg-yellow-400 h-[44%] w-[80%] rounded-[15px]'>
      <div className='flex flex-row bg-yellow-400 h-[70%] w-full rounded-t-[15px]'>
        <div className='flex flex-row h-full w-[70%]'>

         <div className='w-[30%] h-full'>
          <div className='flex justify-center items-center w-full h-[50%]'>
            <img className='object-fill w-[50%] h-[60%]' src="Reigns.jpeg" alt="" />
          </div>
          <div className='h-[50%] pt-[70%]'>
            <p className='text-[8px] font-semibold overline decoration-black decoration-2'>Register General of Pakistan</p>
          </div>
         </div>

         <div className='w-[70%] h-full'>
          <div className='h-[50%] w-full'>
            <h1 className='text-[12px] font-bold'>CURRENT ADDRESS :</h1>
            <textarea value={Address} className='text-[13px] ps-2 font-semibold pt-2 h-[70%] w-full bg-yellow-400 resize-none'/>
          </div>
          <div className='h-[50%] w-full'>
            <h1 className='text-[12px] font-bold'>PARMANENT ADDRESS :</h1>
           <textarea value={Address} className='text-[13px] ps-2 font-semibold pt-2 h-[70%] w-full bg-yellow-400 resize-none'/>
          </div>
         </div>
        </div>

        <div className='flex flex-col h-full w-[30%]'>
         <div className='flex justify-center items-center w-full  h-[10%] mt-2'>
           <p className='text-[12px] font-bold '>{CNIC}</p>
         </div>
         <div className='flex justify-center items-start h-[60%] w-fill'>
          <img className='object-fill w-[60%] h-[70%] mt-2' src="QR-Code.png" alt="" />
         </div>
        </div>
      </div>

      <div className='flex bg-yellow-400 h-[30%] w-full justify-center items-center rounded-b-[15px]'>
        <p className='text-white italic font-bold text-md '>If a lost card is found, please drop it in the nearest letter box</p>
      </div>
    </div>
  )
}

export default BackID
