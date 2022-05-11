import React, { Component } from 'react'

export class ListMakanan extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         datalist:this.props.makanan,
      }
    }
  render() {
    return (
      <div>
          <img src={this.props.gambar} alt="Produc Makanan" width="150"/>
      </div>
    )
  }
}

export default ListMakanan