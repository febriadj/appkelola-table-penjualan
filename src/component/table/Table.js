import React from 'react';
import './Table.css';

const Table = ({makanans}) => {
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
          <tbody>
            {makanans.map((makanan, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{makanan.makanan}</td>
                  <td>{makanan.deskripsi}</td>
                  <td>{makanan.harga}</td>
                  <td>Null</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table;