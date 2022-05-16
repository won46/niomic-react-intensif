
import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
           daftar:"daftar makanan nusantara",
           statusRendering: true,
        }
        this.handlePesan = this.handlePesan.bind(this);
      }
  
      handlePesan() {
          alert(this.state.daftar);
      }
  render() {
    return (
      <div>
         {this.state.statusRendering === true ? 
         (
         <div>
         <h1>Selamat Datang</h1>
         <h2>Silahkan Pilih Makanan</h2>
         </div>
         ) : (
          <div>
           <h1>Selamat Tinggal</h1>
           <h2>Jangan Lupa Datang Kembali</h2>
         </div>
         )}
      </div>
    )
  
      
    
  



    // return (
    //     <div>
    //     <h3>Makanan Khas Indonesia</h3>
    //     <p>{this.state.daftar} </p>
    //     <a href='/' onClick={this.handlePesan} >  Halaman Header</a>
    // </div>
    // )
  }
}

export default Header

