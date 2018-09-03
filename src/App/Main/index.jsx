import React from 'react';
import PropTypes from 'prop-types';

class App extends React.PureComponent {
  render() {
    const { helloWorld } = this.props;
    return (
      <div>
        { helloWorld }
      </div>);
  }
}

App.propTypes = {
  helloWorld: PropTypes.string,
};

App.defaultProps = {
  helloWorld: 'hello world',
};

export default App;
