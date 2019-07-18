import React, { Component } from 'react';
import { render } from 'react-dom';
import Child from './Child'
export default class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { Prescore: 100 }

    let Getchild = (e)=>{
      this.setState({Prescore:this.state.Prescore + e})
    }
  }

  render(){
    return(
      <React.Fragment>
      <Child add={this.Getchild} value = {this.state.Prescore}/>
      </React.Fragment>
    )
  }

}