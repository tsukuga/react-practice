import React, { Component } from 'react';
import Filefunc from './filefn';

export default class FileForm extends React.Component{
 constructor() {
    super();
    this.state = {
      data: 'React'
    };
  }


show(e){
  
 let filefunc = new Filefunc();

 let score = filefunc.Getdata(e,(i)=>{
   this.setState({data:i});
   console.log(this.state.data);
 });

}

 render(){

  return(
    <input className="form-control form" type="file" id="file" size="30"
    onChange = {this.show.bind(this)}
    />)
   }

}
  
  
  
  
  
  