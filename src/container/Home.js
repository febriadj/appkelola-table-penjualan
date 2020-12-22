import React, {Component} from 'react';
import './Home.css';
import Navbar from '../component/navbar/Navbar';
import Table from '../component/table/Table';
import AddForm from '../component/addform/AddForm';
import Footer from '../component/footer/footer';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      makanans: [],
      makanan: '',
      deskripsi: '',
      harga: 0,
      id: 0
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      makanans: [
        ...this.state.makanans,
        {
          id: this.state.id,
          makanan: this.state.makanan,
          deskripsi: this.state.deskripsi,
          harga: this.state.harga
        }
      ]
    })
  }

  render(){
    console.log(this.state.makanans);
    return (
      < >
        <Navbar />
        <div id="home-page">
          <Table makanans={this.state.makanans}/>
          <AddForm 
          {...this.state} 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          />
        </div>
        <Footer />
      </>
    )
  }
}