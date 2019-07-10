import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './CreateList/MakeList';
import Main from './CreateList/main';
import './style.css';


export default class Conect extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      data: '選択されていません',
      index:'単位数',
      value:'初期値'
    };

    
  }

  setset(e){
     this.setState({data:e.target.value});
  }

  render(){
    

  return(
    <React.Fragment>
    <div>{this.state.data}</div>
    <div></div>
    <input type = "form"　value ={this.state.data} 
    onChange = {this.setset.bind(this)}/>
    </React.Fragment>
  )
  
  }
  

}
