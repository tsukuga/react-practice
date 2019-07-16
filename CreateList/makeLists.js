import React, { Component } from 'react';
import { render } from 'react-dom';
import Lists from './List';
import Conect from './CreateForm/conect';


export default class MakeList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          '科目番号': "number",
          '科目名': "name",
          '単位数': "credit",
          '成績': "grade"
        }],
      index: '単位数',
      value: '国際総合学類/国際関係学/2015'
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

        <Conect bbbb={this.state.value} aaaa={this.state.data} />
      </React.Fragment>
    )
  }



}
