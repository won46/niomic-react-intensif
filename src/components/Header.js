
import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
           daftar:"daftar makanan nusantara",
        }
        this.handlePesan = this.handlePesan.bind(this);
      }
  
      handlePesan() {
          alert(this.state.daftar);
      }
  render() {
    return (
        <div>
        <h3>Makanan Khas Indonesia</h3>
        <p>{this.state.daftar} </p>
        <a href='/' onClick={this.handlePesan} >  Halaman Header</a>
    </div>
    )
  }
}

export default Header

