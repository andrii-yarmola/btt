import React from 'react'
import Header from '../header/header'
 import  MainContent from '../mainContent/mainContent'


const Main = React.createClass({
  render() {
    return (
      <div id="page">
        <div className="container">
          <div className="wrapper">
            <Header/>
            <MainContent/>
          </div>
        </div>
      </div>
    )
  }
});

export default Main;
