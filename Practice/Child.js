import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Child extends React.Component {
  addValueChild() {
    this.props.add(10);
  }

  render() {
    { this.props.value }
    <input type="buttun" onClick={this.addValueChild.bind(this)} />
  }
}