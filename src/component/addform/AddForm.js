import React from 'react';
import './AddForm.css';

const AddForm = ({makanan, harga, deskripsi, handleChange, handleSubmit}) => {
  return (
    <div id="add-form">
      <form onSubmit={handleSubmit}>
        <span>
          <label>Nama Makanan</label>
          <input name="makanan"
            type="text" id="makanan" className="input-line" placeholder="Nama Makanan"
            value={makanan}
            onChange={(event) => handleChange(event) }
          />
          <label>Harga</label>
          <input name="harga"
            type="number" id="harga" className="input-line" placeholder="Harga" 
            value={harga}
            onChange={(event) => handleChange(event) }
          />
        </span>
        <span>
          <label>Deskripsi</label>
          <textarea name="deskripsi"
          id="deskripsi" className="input-line" placeholder="Deskripsi" 
          value={deskripsi} 
          onChange={(event) => handleChange(event) }>
          </textarea>
        </span>
        <button id="submit" type="submit"></button>
      </form>
    </div>
  )
}

export default AddForm;