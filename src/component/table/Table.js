import React, {Component} from 'react';
import './Table.css';

export default class Table extends Component {
  constructor(props){
    super(props);

    this.state = {
      headerTable: ['No', 'Makanan', 'Deskripsi', 'Harga', 'Action'],
      dataTable: [
        {makanan: 'Nasi Goreng', deskripsi: 'Nasi Goreng Gila Lvl Max', harga: '12.000'},
        {makanan: 'Ayam Rendang', deskripsi: 'Nasi Goreng Gila Lvl Max', harga: '12.000'},
        {makanan: 'Gulai Kambing', deskripsi: 'Nasi Goreng Gila Lvl Max', harga: '12.000'},
        {makanan: 'Sate Ayam', deskripsi: 'Nasi Goreng Gila Lvl Max', harga: '12.000'},
      ]
    }
  }

  renderHeaderTable = () => {
    return this.state.headerTable.map( header => {
      return (
        <td>{header}</td>
      )
    })
  }

  renderDataTable = () => {
    return this.state.dataTable.map( (data, index) => {
      const {makanan, deskripsi, harga} = data;
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{makanan}</td>
          <td>{deskripsi}</td>
          <td>{harga}</td>
          <td>Null</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div id="table">
        <div id="wrap">
          <table>
            <thead>
              {this.renderHeaderTable()}
            </thead>
            <tbody>
              {this.renderDataTable()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}