import React, { useRef } from 'react'
import Image from 'next/image';
import star from '../public/star.png';

const Stars = (props) => {
  const ChipStyles = useRef({
    position: 'absolute',
    top: Math.floor(Math.random()*50),
    left: '50%',
    transform: 'translate(-50%, -50%)'
});

  return (
       <div id= 'star-sky'>
       {props.dbData.map((star, i) => {
        <Image id ='db-star' style={ChipStyles.current} key={i} width={50} height={50} alt='star' src={star}/>
       })}
    </div>
    
  )
}


export default Stars
