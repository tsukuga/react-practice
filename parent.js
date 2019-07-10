import React from 'react';
import PropTypes from 'prop-types';
import child from './child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoge: 'hogehoge'
    };
  }

  hogeFunc() {
    this.setState({ hoge: '変えたぞ' });
  }
  render() {
    return (
      <div>
        <Child dataHoge={() => { this.hogeFunc(); }} />
      </div>
    );
  }
}
