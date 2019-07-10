import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './js/MakeList';
import Main from './js/main';
import './style.css';


export default class Conect extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      data: 'React',
      index:'単位数'
    };
  }

  
  render(){

  return(
    <React.Fragment>
    <div>{this.state.data}</div>
    <div>{this.props.aaaa}</div>
    </React.Fragment>
  )
  
  }
  

}
