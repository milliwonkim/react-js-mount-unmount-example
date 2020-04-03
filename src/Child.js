import React from 'react'

class Child extends React.Component {
  componentWillMount() {
    this.props.logItem('component will mount');
  }
  componentWillUnmount() {
    this.props.logItem('component will unmount');
  }
  render() {
    return (
      <div id="component">
        React component!
      </div>
    );
  }
}

export default Child;