/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Stars from '../components/Stars';
import Input from '../components/Input';
import InitialModal from '../components/InitialModal';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: true,
    };
  }

  /**
   * On intial rendering of app or rerendering through routing, fn makes
   * request to api to access all hased wishes in db
   * @returns hashed wishes stored in db
   */
  static async getInitialProps() {
    let dbData;
    try {
      const results = await axios.get('http://localhost:3001/getWishes');
      dbData = results.data;
    } catch (e) {
      console.log('error fetching initial props', e);
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
        <InitialModal
          show={this.state.modal}
          onHide={() => this.setState({
            modal: false,
          })}
        />
        <Stars dbData={this.props.dbData} />
        <Input />
        <div className="stars" />
        <div className="twinkling" />
        <div className="clouds" />
      </div>
    );
  }
}

export default Home;
