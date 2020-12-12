import React, {Component} from 'react';
import './Table.css';

export default class Table extends Component {
  constructor(props){
    super(props);

    this.state = {
      makanan: '',
      deskripsi: '',
      harga: 0,
    }
  }

  render() {
    return (
      <div id="table">
        <div id="wrap">
          <table>
            <tr>
              <td>No</td>
              <td>Makanan</td>
              <td>Deskripsi</td>
              <td>Harga</td>
              <td>Action</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Nasi Goreng</td>
              <td>Nasi Goreng Gila Lvl Max</td>
              <td>12.000</td>
              <td>Null</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ayam Rendang</td>
              <td>Ayam Dengan Bumbu Rendang</td>
              <td>13.000</td>
              <td>Null</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}