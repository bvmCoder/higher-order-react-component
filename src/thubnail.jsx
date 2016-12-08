const React = require("react")
const { Component } = React

const Badge = require('./badge')

class ThumbNail extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log(this)
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={this.props.imageUrl} alt="..." />
            <div className="caption">
              <h3>{this.props.header}</h3>
              <p>{this.props.description}</p>
              <p><Badge heading={this.props.title} shonkha={this.props.number} /></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
