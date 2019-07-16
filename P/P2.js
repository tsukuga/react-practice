import React from 'react';
export default class P2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.td.map((e) => (
          <td>{e}</td>))}
      </React.Fragment>
    )
  }
}