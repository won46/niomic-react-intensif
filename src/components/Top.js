import React from 'react'

const Top = () => {
    const handlePesan = (value,e) => {
        e.preventDefault();
        alert("halaman top tampil");
        alert (value);
    }
  return (
    <a href='/' onClick = {(e) => handlePesan("pesan dari top",e)} >  Halaman Top</a>
  )
}

export default Top