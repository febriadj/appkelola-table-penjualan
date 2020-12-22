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

    if ( this.state.id === "" ){
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            makanan: this.state.makanan,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga
          }
        ]
      })
    } else {
      const makananTidakDipilih = this.state.makanans
        .filter(makanan => makanan.id !== this.state.id)
        .map(filterMakanan => {
          return filterMakanan;
        });

        this.setState({
          makanans: [
            ...makananTidakDipilih,
            {
              id: this.state.makanans.length + 1,
              makanan: this.state.makanan,
              deskripsi: this.state.deskripsi,
              harga: this.state.harga
            }
          ]
        })
    }
    
    this.setState({
      makanan: '',
      deskripsi: '',
      harga: 0,
      id: ''
    })
  }

  editData = (id) => {
    const makananDipilih = this.state.makanans
        .filter(makanan => makanan.id === id)
        .map(filterMakanan => {
          return filterMakanan;
        });

    this.setState({
      makanan: makananDipilih[0].makanan,
      deskripsi: makananDipilih[0].deskripsi,
      harga: makananDipilih[0].harga,
      id: makananDipilih[0].id
    })
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