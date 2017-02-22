const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { shows } = require('../public/data')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} shows={shows} />
      <Route path='/details/:id' component={Details} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
