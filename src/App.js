import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'
import Profile from './Profile'
import './App.css';

class App extends React.Component {
  
  render() {
    return(
      <Router>
        <div className="App">
          <header>
            <Link to="/"></Link>
          </header>
          <main>
            <Route exact path = "/" component = {Main} />
            <Route path = "/:email" component = {Profile} />
          </main>
        </div>
      </Router>
    )
  }

}

export default App;