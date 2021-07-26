import React, { useEffect } from 'react'
import Image from 'next/image';
import star from '../public/starr.png';
import dynamic from "next/dynamic";

const Stars = (props) => {

function onClick(starData){
  console.log('starData', starData);
}

const starArr= [];
for(let i = 0; i < props.dbData.length; i++) {
  starArr.push(<Image onClick={()=> onClick(props.dbData[i])} id='star-child' width={50} height={50} src={star}></Image>)
}
  return (
       <div className='star-container'>
        {starArr}
    </div>
    
  )
}


export default Stars
