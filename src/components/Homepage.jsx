import React from 'react'

function Homepage() {
  return (
   <div className="p-7 w-screen h-[100vh]  bg-no-repeat bg-cover bg-[url('https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1300&userId=&cache=v2')]">
    <div className='text-white font-thin text-5xl mt-10 md:text-8xl  md:w-[8em]'>FreshGoods </div>
    <div className='text-white font-thin text-5xl mt-10 md:text-8xl  md:w-[8em]'>Concisely describe your product or service </div>
    <div className='text-white mt-4 text-3xl md:w-[25em]'>No need to get clever. Tell people exactly what you're offering then use this space to communicate your key value proposition </div>
    <button className='bg-yellow-400 text-3xl font-bold px-8  py-2 mt-7'>Order now</button>
   </div>
  )
}

export default Homepage
