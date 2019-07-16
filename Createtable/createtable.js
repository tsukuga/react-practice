import React from 'react';

export default class Createtable extends React.Component {

  render() {

    const date = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg"];
    return (
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              {this.props.data.map((e,index) => (<td key={}>{e}</td>))}
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}