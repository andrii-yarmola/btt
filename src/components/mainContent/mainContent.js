import React from 'react'
import AdminForm from '../adminLoginForm/form'

const MainContent = React.createClass({
  render() {
    return (
      <main className="main">
        <div className="content">
          <div className="container container-narrow">
            <AdminForm/>
          </div>
        </div>
      </main>
    )
  }
});

export default MainContent;