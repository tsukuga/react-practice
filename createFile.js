import React, { Component } from 'react';
import Filefunc from './filefn';
import Conect from './conect'

export default class FileForm extends React.Component{
 constructor() {
    super();
    this.state = {
      data:[
      {
        '科目番号':"number",
        '科目名':"name",
        '単位数':"credit",
        '成績':"grade"
      }],
      index:'単位数'
    };
  }

getFile(e){
  
 let filefunc = new Filefunc();
 
 let score = filefunc.Getdata(e,(i)=>{
   this.setState({data:i});
 });

}

 render(){

  return(
    <div>
    <input className="form-control form" type="file" id="file" size="30"
    onChange = {this.getFile.bind(this)}
    />
    <div>{this.state.data[0][this.state.index]}</div>
    <Conect aaaa={this.state.data}/>
    </div>
    )
   }

}
  
  
  
  
  
  