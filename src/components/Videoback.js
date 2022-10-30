import React from 'react'
import videobg from '../Assets/student.mp4'
const Videoback = () => {
  return (
    <div className='main' ><video style={{width:'100%',  height:'100%',objectFit:'fill' }}  src={videobg} autoPlay loop muted/></div>
  )
}

export default Videoback