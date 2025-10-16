import React from 'react'
import FrondID from '../MiniComponent/FrondID'
import BackID from '../MiniComponent/BackID'

function Info() {
  return (
    <div className='bg-black w-[40%] h-[650px] flex justify-evenly items-center flex-col'>
       <FrondID/>
       <BackID/>
    </div>
  )
}

export default Info
