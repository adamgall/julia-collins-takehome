/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Image from 'next/image';
import ModalData from './ModalData';
import star from '../public/starr.png';

const Stars = (props) => {
  const [starData, setData] = useState('');
  const [showData, setShowData] = useState(false);

  /**
 * OnClick fn takes in each individual star's data, and uses a hook to
 * setData and pass to the ModalData component to display hashed wish
 * @param {object} starData
 */

  function onClick(data) {
    setData(data);
    setShowData(true);
  }

  const starArr = [];
  for (let i = 0; i < props.dbData.length; i += 1) {
    starArr.push(<Image onClick={() => onClick(props.dbData[i])} key={i} id="star-child" width={50} height={50} src={star} />);
  }
  return (
    <div className="star-container">
      {starArr}
      {showData ? <ModalData setShowData={setShowData} starData={starData} /> : ''}
    </div>
  );
};

export default Stars;
