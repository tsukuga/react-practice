import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './CreateList/MakeList';
import Main from './CreateList/main';
import './style.css';


export default class Conect extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      data:[
      {
        '科目番号':"number",
        '科目名':"name",
        '単位数':"credit",
        '成績':"grade"
      }],
      index:'単位数',
      value:'初期値'
    };

    
  }

  // setset(e){
  //    this.setState({data:e.target.value});
  // }

  // <input type = "form"　value ={this.state.data} 
  //   onChange = {this.setset.bind(this)}/>

  reset(){
     this.setState({data:this.props.aaaa})
     console.log(this.props.aaaa);
  }

  render(){
    

  return(
    <React.Fragment>
    <div>{this.state.data[0][this.state.index]}</div>
    <div></div>
    <button type="button" onClick = {this.reset.bind(this)}>set反映</button>
    </React.Fragment>
  )
  
  }
  

}
