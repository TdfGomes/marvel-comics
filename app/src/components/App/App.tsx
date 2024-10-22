import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import ThemeProvider from '../UI/ThemeProvider'
import Master from '../Master'
import Detail from '../Detail'
import Grid from '../UI/Grid'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app_container">
          <Switch>
            <Redirect exact from="/" to="/comics" />
            <Route path="/comics">
              <Grid variant="container" width={1} minHeight="100vh">
                <Grid
                  variant="item"
                  width={[1 / 2, null, 4 / 12]}
                  overflowX="auto"
                  overflowY="scroll"
                  height="100vh"
                  bg="primary"
                >
                  <Master />
                </Grid>
                <Grid
                  variant="item"
                  width={[1 / 2, null, 8 / 12]}
                  overflowX="auto"
                  overflowY="scroll"
                  height="100vh"
                  bg="dark"
                >
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

export default App
