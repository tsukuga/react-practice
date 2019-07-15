import React, { Component } from 'react';
import { render } from 'react-dom';
import makeOption from './makeOption';
import Lists from './List';


export default class MakeList extends React.Component{
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
