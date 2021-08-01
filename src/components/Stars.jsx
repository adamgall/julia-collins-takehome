/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Image from 'next/image';
import ModalData from './ModalData';
import star from '../public/starr.png';

const Stars = ({ dbData, showAll }) => {
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
  dbData.map((el, i) => {
    // eslint-disable-next-line react/no-array-index-key
    starArr.push(<Image onClick={() => onClick(el)} key={i} id="star-child" width={50} height={50} src={star} />);
  });

  return (
    <div className="star-container">
      {starArr}
      {showData ? <ModalData showAll={showAll} setShowData={setShowData} starData={starData} /> : ''}
    </div>
  );
};

export default Stars;
