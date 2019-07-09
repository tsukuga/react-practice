import React, { Component } from 'react';
import Filefunc from './filefn';

export default class FileForm extends React.Component{
 constructor() {
    super();
    this.state = {
      data: 'React',
      index:'単位数'
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
    <div>
    <input className="form-control form" type="file" id="file" size="30"
    onChange = {this.show.bind(this)}
    />
    <p>{this.state.data[1][this.state.index]}</p>
    </div>
    )
   }

}
  
  
  
  
  
  