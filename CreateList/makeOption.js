import React from 'react';

export default class MakeOption extends React.Component{
  render(){
   return(
     <option value={this.props.value}>{this.props.text}</option>
    )
  }
 }