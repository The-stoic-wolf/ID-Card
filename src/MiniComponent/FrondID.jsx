import React from 'react'
import { useSelector } from 'react-redux'

function FrondID() {
 const Name = useSelector((state) => state.user.Name)
 const FatherName = useSelector((state) => state.user.FatherName)
 const Gender = useSelector((state) => state.user.Gender)
 const CNIC = useSelector((state) => state.user.CNICNo)
 const DOB = useSelector((state) => state.user.DOB)
 const Issue = useSelector((state) => state.user.Issue)
 const Expiry = useSelector((state) => state.user.Expiry)

  return (
    <div className='flex bg-yellow-400 h-[44%] w-[80%] rounded-[15px]'>

      <div className='h-full w-[22%] rounded-l-1xl'>
        <div className='flex h-[30%] w-[80%] mt-[3%] justify-end ms-[5%]'>
            <img src="Nadra-Logo.png" alt="IdCard" className='h-[100%] w-[80%] object-fill rounded-[15px]' />
        </div>
        <div className='flex h-[15%] w-[80%] mt-[20%] justify-end ms-[18%]'>
            <img src="simCard.png" alt="IdCard" className='h-[100%] w-[60%] object-cover rounded-[15px] border-black border-[1px]' />
        </div>
      </div>

      <div className='h-full w-[78%] rounded-r-1xl'>
        <div className='flex flex-row w-fullh-[18%]'>
          <div className='ps-[1%] w-[35%]'>
            <h1 className='text-[25px] font-semibold underline decoration-black decoration-2'>PAKISTAN</h1>
            <p className='text-[8px]'>ISLAMIC REPUBLIC OF PAKISTAN</p>
          </div>
          <div className='w-[37%] pt-[3%] ps-[3%]'>
            <p className='text-[13px] font-serif'>National Identity Card</p>
          </div>
          <div className='w-[20%] flex justify-center items-center'>
            <img className='h-[60%] w-[60%] object-fill' src="flag.png" alt="" />
          </div>
        </div>

        <div className='flex flex-row h-[82%]'>
         <div className='h-full w-[70%] ps-[1%]'>
           <div className='w-full h-[20%]'>
              <h2 className='text-[11px] font-bold'>Name</h2>
              <p className='font-serif text-[13px] ps-3'>MUHAMMAD {Name}</p>
           </div>
           <div className='w-full h-[20%]'>
              <h2 className='text-[11px] font-bold'>FatherName</h2>
              <p className='font-serif text-[13px] ps-3'>{FatherName}</p>
           </div>
           <div className='flex flex-row h-[20%]'>
            <div className='w-[30%]'>
               <h2 className='text-[11px] font-bold'>Gender</h2>
               <p className='ps-3 font-serif text-[13px]'>{Gender}</p>
            </div>
            <div className='w-[70%]'>
               <h2 className='text-[11px] font-bold'>Country Of Stay</h2>
               <p className='text-[14px] font-serif ps-2'>PAKISTAN</p>
            </div>
           </div>
           <div className='flex flex-row h-[20%]'>
            <div className='w-[50%]'>
               <h2 className='text-[11px] font-bold'>Identity Number</h2>
               <p className='ps-3 text-[12px] font-semibold'>{CNIC}</p>
            </div>
            <div className='w-[50%]'>
               <h2 className='text-[11px] font-bold'>Date of Birth</h2>
               <p className='ps-3 text-[12px] font-semibold'>{DOB}</p>
            </div>
           </div>
           <div className='flex flex-row h-[20%]'>
            <div className='w-[50%]'>
               <h2 className='text-[11px] font-bold'>Date of Issue</h2>
               <p className='ps-3 text-[12px] font-semibold'>{Issue}</p>
            </div>
            <div className='w-[50%]'>
               <h2 className='text-[11px] font-bold'>Date of Expiry</h2>
               <p className='ps-3 text-[12px] font-semibold'>{Expiry}</p>
            </div>
           </div>
           
         </div>

         <div className='w-[30%]'>
          <div className='flex justify-center items-center h-[60%] w-full'>
            <img className='h-[80%] w-[80%] object-fill' src="Reigns.jpeg" alt="" />
          </div>
          <div className='h-[40%] w-full pt-[50%]'>
            <p className=''> </p>
            <p className='text-[12px] text-center font-semibold overline decoration-black decoration-2'>Holder's Signature</p>
          </div>
         </div>
        </div>

      </div>
    </div>
  )
}

export default FrondID
