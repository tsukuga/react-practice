import React from 'react';

export default class CreateTd extends React.Component{
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
       {Object.keys(this.props.td).map((e)=>(
         <td>{this.props.td[e]}</td>))}
       </React.Fragment>
       )
      }
     }