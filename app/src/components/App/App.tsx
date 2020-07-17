import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {  ThemeProvider } from '../UI'
import Master from '../Master'
import Detail from '../Detail'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app_container">
          <Switch>
            <Route path="/">
              <Master/>
              <Route path="/:id" component={Detail}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
