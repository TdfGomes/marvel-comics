import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {  ThemeProvider } from '../UI'
import Master from '../Master'
import Detail from '../Detail'
import Grid from '../UI/Grid'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app_container">
          <Switch>
            <Route path="/comics">
              <Grid variant="container" width={1}>
                <Grid
                  variant="item"
                  width={[1 / 2, 4 / 12, 3 / 12]}
                  overflowX="auto"
                  overflowY="scroll"
                  height="100vh"
                  bg="lightGrey"
                >
                  <Master />
                </Grid>
                <Grid variant="item" width={[1 / 2, 8 / 12, 9 / 12]}>
                  <Route path="/comics/:id" component={Detail} />
                </Grid>
              </Grid>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
