//@flow
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Redirect } from 'react-router'
import { Provider } from 'react-redux'

import {grey500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Companies from '~/app/containers/pages/companies/Companies'
import NewCompany from '~/app/containers/pages/new_company/NewCompany'
import Layout from '~/app/containers/pages/layout/Layout'
import store from '~/app/Store'
import './assets/styles/global'

// Needed for onTouchTap
injectTapEventPlugin()

const muiTheme = getMuiTheme({
  appBar: { height: 50 },
  palette: { textColor: grey500 }
})

render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <div style={{height: '100%'}}>
        <Router history={browserHistory}>
          <Redirect from='/' to='/companies' />
          <Route path='/' component={Layout}>
            <Router path='companies' component={Companies} />
            <Router path='companies/new' component={NewCompany} />
          </Route>
        </Router>
      </div>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'))
