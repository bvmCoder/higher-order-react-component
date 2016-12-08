const React = require("react")
const { Component } = React

const Thumbnail = require('./thumbnail')

class ThumbNailList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let list = this.props.thumbNailData.map(function (thumbNailProps, index) {
      return <ThumbNail {...thumbNailProps} key={index} />
    })

    return (
      <div>
        {list}
      </div>
    )
  }
}
