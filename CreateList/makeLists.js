import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeOption from './makeOption';
import Lists from './List';
import Conect from '../conect';


export default class MakeList extends React.Component{
 
 constructor(props) {
    super(props);
    this.state = {
      index:'単位数',
      value:'国際総合' 
      }
  }

   getSelectedList(e){
    this.setState({value:e.target.value});
    console.log(this.state.value)
  }

  render(){
   let list= new Lists();

   return(
    <React.Fragment>
    <select onChange = {this.getSelectedList.bind(this)}>

    {Object.keys(list.GetList()).map((e,index) => (
      <MakeOption value={index} text={e}/>
    ))}

    </select> 

    <Conect bbbb={this.state.value}/>
    </React.Fragment>
   )
  }

 

 }
