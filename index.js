import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './js/MakeList';
import Main from './js/main';
import './style.css';
import FileForm from './createFile'
import Conect from './conect'


render(<Main />, document.getElementById('list'));
render(<FileForm />, document.getElementById('root'));
// render(<Conect />, document.getElementById('root1'));
