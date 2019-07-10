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
 
 this.props.hoge
 
 let score = filefunc.Getdata(e,(i)=>{
   this.setState({data:i});
  //  console.log(this.state.data);
 });

}

 render(){

  return(
    <div>
    <input className="form-control form" type="file" id="file" size="30"
    onChange = {this.show.bind(this)}
    />
    <input id="start" type="submit" value="判定開始"
    onClick = {this.props.revise}
    />
    </div>
    )
   }

}
  
  
  
  
  
  