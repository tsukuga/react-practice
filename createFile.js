import React, { Component } from 'react';
import Filefunc from './filefn';

export default class FileForm extends React.Component{

show(e){
 
 let score;
 let filefunc = new Filefunc();

 score = filefunc.Getdata(e,(i)=>{
   console.log(i);
   return i;
 });

   console.log(score);
}


 render(){
    
    let filefunc = new Filefunc();
  
  return(
    <input className="form-control form" type="file" id="file" size="30"
    onChange = {this.show.bind(this)}
    />

    )

   }

}
  
  
  
  
  
  