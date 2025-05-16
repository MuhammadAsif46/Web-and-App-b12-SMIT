
// import React from 'react'


// const DynamicRoute = ({params}) => {
//     // console.log("params-->", params.id);
//     const {id} = params
    
//   return (
//     <div>DynamicRoute - <span className='text-blue-400'>{id}</span></div>
//   )
// }

// export default DynamicRoute



"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const DynamicRoute = () => {

    const {id} = useParams()
  return (
    <div>DynamicRoute - <span className='text-blue-400'>{id}</span></div>
  )
}

export default DynamicRoute