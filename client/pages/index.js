import React from 'react';
import Head from 'next/head';
import Intro from '../components/Intro';
import Input from '../components/Input';
const Home = () => {
  return (
    <div>
    <Head>
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
    </Head>
      Hello!    
      <Intro/>
      <Input/>
    </div>
  )
}

export default Home
