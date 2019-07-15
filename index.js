import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './CreateList/MakeList';
import Main from './CreateList/main';
import './style.css';
import FileForm from './createFile'
import Conect from './conect'


render(<MakeList />, document.getElementById('list'));
render(<FileForm />, document.getElementById('root'));
// render(<Conect />, document.getElementById('root1'));
