import React, { Component } from 'react';
import { render } from 'react-dom';
import FileForm from '/CreateFrom/createFile';
import Createtable from '/Createtable/createtable';

export default class Gattynnko extends React.Component{
  
  constructor() {
    super();
    this.state = {
      data: [
        {
          '科目番号': "number",
          '科目名': "name",
          '単位数': "credit",
          '成績': "grade"
        }],
      index: '単位数'
    };
  }

  render(){
    return(
      <React.Fragment>
      <FileForm/>
      <Createtable data ={this.state.data}/>
      </React.Fragment>
    )
  }

}