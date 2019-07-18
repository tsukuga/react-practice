import React, { Component } from 'react';
import { render } from 'react-dom';
import Lists from './List';
import Conect from '../conect';


export default class MakeList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: '',
      value: ''
    }
  }

  getSelectedList(e) {
    this.setState({ value: e.target.value });
  }

  render() {

    let list = new Lists();

    return (
      <React.Fragment>
        <select onChange={this.getSelectedList.bind(this)}>
          {Object.keys(list.GetList()).map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </React.Fragment>
    )
  }



}
