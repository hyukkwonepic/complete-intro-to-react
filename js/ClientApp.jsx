var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var MyFirstComponent = () => (
  <div>
    <MyTitle title="whatevs" color="rebeccapurple" />
    <MyTitle title="LOL" color="papayawhip" />
    <MyTitle title="OMGSHEISSOANNOYING" color="red" />
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
