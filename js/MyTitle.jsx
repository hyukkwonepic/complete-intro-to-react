var React = require('react')

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  // enhanced object literal syntax
  render () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>{this.props.title}</h1>
      </div>
    )
  }
})

module.exports = MyTitle
