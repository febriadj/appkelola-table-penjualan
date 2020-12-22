import React from 'react';
import './Table.css';

const Table = ({makanans, editData, hapusData}) => {
  return (
    <div id="table">
      <div id="wrap">
        <table>
          <tr id="header">
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
                    <button className="button-action edit" onClick={() => editData(makanan.id)}>Edit</button>
                    <button className="button-action hapus" onClick={() => hapusData(makanan.id)}>Hapus</button>
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