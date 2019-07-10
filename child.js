import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  dataHoge: PropTypes.func,
};

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickButton() {
    return this.props.dataHoge();
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.clickButton(); }}>ボタン</button>
      </div>
    );
  }
}

child.propTypes = propTypes;
export default child;