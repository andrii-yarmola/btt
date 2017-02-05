import React from 'react';

const Main = React.createClass({
  render() {
    return (
      <div>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

// old:
// {React.cloneElement(this.props.children, {...this.props})}﻿

export default Main;
