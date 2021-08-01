/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Stars from '../components/Stars';
import Input from '../components/Input';
import InitialModal from '../components/InitialModal';

const Home = (props) => {
  const [modal, setModal] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [allData, setAllData] = useState(null);

  return (
    <div>
      <Head>
        <title>SpaceHash</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>
      <InitialModal
        show={modal}
        onHide={() => setModal(false)}
      />
      {
        showAll ? <Stars dbData={allData} showAll={showAll} />
          : <Stars showAll={showAll} dbData={props.dbData} />
    }
      <Input setAllData={setAllData} setShowAll={setShowAll} />
      <div className="stars" />
      <div className="twinkling" />
      <div className="clouds" />
    </div>
  );
};

/**
   * On intial rendering of app or rerendering through routing, fn makes
   * request to api to access all hased wishes in db
   * @returns hashed wishes stored in db
   */

Home.getInitialProps = async () => {
  let dbData;
  try {
    const results = await axios.get('http://localhost:3001/getWishes');
    dbData = results.data;
  } catch (e) {
    console.log('error fetching initial props', e);
  }
  return { dbData };
};

export default Home;
