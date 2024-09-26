import React from 'react'

function BenefitCard(props) {
  return (
    <div className='flex flex-col items-center mt-10'>
      <img src={props.icon} alt=""  />
      <h2 className='font-bold text-2xl text-center'>{props.title}</h2>
      <h3 className='w-[15em] text-center'>
        {props.text}
      </h3>
    </div>
  )
}

export default BenefitCard
