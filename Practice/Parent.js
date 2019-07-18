import React, { Component } from 'react';
import { render } from 'react-dom';
import Child from './Child'
import FileForm from '../CreateForm/createFile'


export default class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Prescore: 100,
      score: ''
    }
  }

  Getchild(e) {
    this.setState({ Prescore: this.state.Prescore + e })
  }

  Getchildscore(e) {
    this.setState({ score: e })
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.state.Prescore}</div>
        <Child add={this.Getchild.bind(this)} value={this.state.Prescore} />
        <FileForm hoge={this.Getchildscore.bind(this)} />
        <button type="buttun" onClick={()=>(console.log(this.state.score))}>
          show
        </button>
      </React.Fragment>
    )
  }

}