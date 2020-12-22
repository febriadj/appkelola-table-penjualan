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
      id: ''
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
          id: this.state.id.length + 1,
          makanan: this.state.makanan,
          deskripsi: this.state.deskripsi,
          harga: this.state.harga
        }
      ]
    })

    this.setState({
      makanan: '',
      deskripsi: '',
      harga: 0,
      id: ''
    })
  }

  editData = (id) => {
    console.log('ID : ', id);
  }
  
  render(){
    return (
      < >
        <Navbar />
        <div id="home-page">
          <Table 
            makanans={this.state.makanans}
            editData={this.editData}
          />
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