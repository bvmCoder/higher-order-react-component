const React = require("react")
const { Component } = React
const ReactDOM = require("react-dom")

class Badge extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log(this)
    return (
      <button className="btn btn-primary" type="button">
        {this.props.heading} <span className="badge">{this.props.shonkha}</span>
      </button>
    )
  }
}
