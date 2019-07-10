import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './CreateList/MakeList';
import Main from './CreateList/main';
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
    
   let score = this.props.aaaa;
    console.log(score);

  return(
    <React.Fragment>
    <div>{this.state.data}</div>
    <div></div>
    </React.Fragment>
  )
  
  }
  

}
