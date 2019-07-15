import React, { Component } from 'react';
import { render } from 'react-dom';
import MakeOption from './makeOption';
import Lists from './List';


export default class MakeList extends React.Component{
  render(){
   
  //  リストクラスからインスタンス生成
   let list= new Lists();

   return(
    <React.Fragment>
    {Object.keys(list.GetList()).map((e,index) => (
      <MakeOption value={index} text={e}/>
    ))}
    </React.Fragment>
   )
  }
 }
