import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import '../Loader/Loader.css'

const Loader = () => {
  return (
    <div className='loader-box'>
        <Skeleton className='loader' animation="wave" variant="rectangular" width={300} height={400} />
        <Skeleton className='loader' animation="wave" variant="rectangular" width={300} height={400} />
        <Skeleton className='loader' animation="wave" variant="rectangular" width={300} height={400} />
    </div>
  )
}

export default Loader