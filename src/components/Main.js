import React, { Component } from 'react'

export class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title: "Menu Makanan",
         title2:"Menu Minuman",
         inputValue: "",
         inputKota: "",
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

    handleChange(value,e) {
        this.setState({ [value]: e.target.value})
    }
  render() {
      console.log("jalan  : render")
    return (
      <div>
          <h3>{this.state.title}</h3>
          <h3>{this.state.title2}</h3>
          <button onClick={this.rubahData}>Rubah Data</button>
          <input type="text" value={this.state.inputValue} placeholder="nama" onChange={e => this.handleChange("inputValue",e) }/>
          <input type="text" value={this.state.inputKota} placeholder="kota" onChange={e => this.handleChange("inputKota",e)}/>
      </div>
    )
  }
}

export default Main