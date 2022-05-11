import React, { Component } from 'react'
import Images from './Images'

class List extends Component {
  render() {
    return (
        <div>
      <ol>
          <Images linkgambar ="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" alt="food1" lebar="500"/>
          <li>Mie ayam</li>
          <Images linkgambar ="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" alt="food2" lebar="400"/>
          <li>Bakso biasa</li>
          <Images linkgambar ="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" alt="food3" lebar="300" />
          <li>Bakso rusuk</li>
          <Images linkgambar ="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" alt="food4" lebar="200" />
      </ol>
      </div>
    )
  }
}

export default List