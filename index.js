import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './js/MakeList';
import Main from './js/main';
import './style.css';
import FileForm from './createFile'

class main extends React.Component{
  
  constructor() {
    super();
    this.state = {
      data: 'React'
    };
  }

}

render(<Main />, document.getElementById('list'));
render(<FileForm />, document.getElementById('root'));
