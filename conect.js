import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './js/MakeList';
import Main from './js/main';
import './style.css';
import FileForm from './createFile'

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
    <FileForm
    revise = {this.hoge}/>
    <div>{this.state.data[1][this.state.index]}</div>
    </React.Fragment>
  )
  
  }
  

}
