import React, { Component } from 'react'
import Head from 'next/head';
import Intro from '../components/Intro';
import Input from '../components/Input';
import axios from 'axios';

class Home extends Component {
    static async getInitialProps() {
      let dbData;
      try {
        let results = await axios.get('http://localhost:3001/getWishes');
        dbData = results.data;
        console.log(dbData)

      } catch(e) {
        console.log('error fetching initial props',  e)
      }
      return { dbData };
    }
  render() { 
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
        <Intro/>
        <Input dbData={ this.props.dbData }/> 
          <div class="stars"></div>
          <div class="twinkling"></div>
          <div class="clouds"></div>
      </div>
     );
  }
}
 
export default Home
