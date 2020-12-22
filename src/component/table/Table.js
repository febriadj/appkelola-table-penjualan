import React from 'react';
import './Table.css';

const Table = ({makanans, editData}) => {
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
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{makanan.makanan}</td>
                  <td>{makanan.deskripsi}</td>
                  <td>{makanan.harga}</td>
                  <td>
                    <button className="edit" onClick={() => editData(makanan.id)}>Edit</button>
                  </td>
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