import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './CreateList/makeLists';
import './style.css';
import FileForm from './CreateForm/createFile'
import Gattynnko from './gattyannko'
import Conect from './conect'



render(<MakeList />, document.getElementById('list'));
render(<FileForm />, document.getElementById('root'));
render(<Gattynnko />, document.getElementById('result'));
