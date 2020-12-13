import React, {Component} from 'react';
import './Home.css';
import Navbar from '../component/navbar/Navbar';
import Table from '../component/table/Table';
import AddForm from '../component/addform/AddForm';
import Footer from '../component/footer/footer';

export default class Home extends Component {
  render(){
    return (
      < >
        <Navbar />
        <div id="home-page">
          <Table />
          <AddForm />
        </div>
        <Footer />
      </>
    )
  }
}