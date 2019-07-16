import React from 'react';
export default class P2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        {Object.keys(this.props.td).map((key) => (
          <td>{this.props.td[key]}</td>))}
      </React.Fragment>
    )
  }
}