import React, { Component } from 'react'

export class MenuKontak extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        alamat:"Jl. Kebon Jeruk No. 1, Jakarta Selatan 13860",
         kontak:"088888829"
      }
    }
  render() {
    return (
      <div>
          <center>
              <h3>{this.state.alamat}</h3>
              <h4>Kontak Kami : {this.state.kontak}</h4>
          </center>
      </div>
    )
  }
}

export default MenuKontak