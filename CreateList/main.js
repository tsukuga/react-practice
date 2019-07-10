import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeList from './MakeList';
import Lists from './List';


export default class Main extends React.Component{
  render(){
   
  //  リストクラスからインスタンス生成
   let list= new Lists();

   return(
    <React.Fragment>
    {Object.keys(list.GetList()).map((e,index) => (
      <MakeList value={index} text={e}/>
    ))}
    </React.Fragment>
   )
  }
 }
