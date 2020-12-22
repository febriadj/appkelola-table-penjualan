import React, {Component} from 'react';
import './Table.css';

export default class Table extends Component {
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
              <td>12000</td>
              <td>Null</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}