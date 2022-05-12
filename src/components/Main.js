import React, { Component } from 'react'

export class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title: "Menu Makanan",
         title2:"Menu Minuman",
         inputValue: "Nasi Padang Nusantara"
      }
      this.rubahData = this.rubahData.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    // rubahData() {
    //     this.setState({title:"Pilih Makanan"})
    // }

    rubahData() {
        this.setState((state,props) =>{
            return {
                title:"Pilih Menu Makanan",
                title2:"Pilih Menu Minuman",
                
            }
        })
    }

    handleChange(e) {
        console.log(e.target.value);
    }
  render() {
    return (
      <div>
          <h3>{this.state.title}</h3>
          <h3>{this.state.title2}</h3>
          <button onClick={this.rubahData}>Rubah Data</button>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Main