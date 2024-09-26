import React from 'react'

function FeatureCard(props) {
  return (
    <div className='w-[22em] py-5 '>
      <img src={props.src} alt="" />
      <h2 className='text-center text-2xl font-bold mt-3' > {props.title}</h2>
      <h2 className='text-center text-2xl mt-3' > {props.text}</h2>
    </div>
  )
}

export default FeatureCard
