import React, { Component } from 'react';
import Filefunc from './filefn';
import Conect from '../conect'

export default class FileForm extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      index: '単位数'
    };
  }

  getFile(e) {

    let filefunc = new Filefunc();

    let score = filefunc.Getdata(e, (data) => {
      this.setState({ data: data });
    });

  }

  render() {
    return (
      <div>
        <input className="form-control form" type="file" id="file" size="30"
          onChange={this.getFile.bind(this)}
        />
      </div>
    )
  }

}





