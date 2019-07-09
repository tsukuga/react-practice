import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './js/MakeList';
import Main from './js/main';
import './style.css';
import FileForm from './createFile'
import Conect from './conect'

class main extends React.Component{
  
  constructor() {
    super();
    this.state = {
      data: 'React'
    };
  }

  show();

  show(){
    console.log(this.state.data);
  }

}

render(<Main />, document.getElementById('list'));
render(<FileForm />, document.getElementById('root'));
render(<Conect />, document.getElementById('root1'));
