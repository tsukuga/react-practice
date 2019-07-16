import React from 'react';

export default class Createtable extends React.Component {

  render() {

    return (
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              {this.props.data.map((e,index) => (<td key={index}>{e}</td>))}
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}