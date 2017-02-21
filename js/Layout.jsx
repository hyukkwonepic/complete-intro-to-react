const React = require('react')

const Layout = (props) => (
  <div className='app-container'>
    <h1>My branding</h1>
    {props.children}
  </div>
)

const { element } = React.PropTypes

Layout.React.propTypes = {
  children: element.isRequired
}

module.exports = Layout
