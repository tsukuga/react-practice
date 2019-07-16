import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './CreateList/makeLists';
import './style.css';
import FileForm from './CreateForm/createFile'
import Conect from './conect'


render(<MakeList />, document.getElementById('list'));
render(<FileForm />, document.getElementById('root'));
// render(<Conect />, document.getElementById('root1'));
