import React from 'react';

export default class Createtable extends React.Component {

  render() {

    return (
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              {this.props.data.map((e) => (<td>{e}</td>))}
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}