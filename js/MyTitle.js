var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  // enhanced object literal syntax
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

module.exports = MyTitle
