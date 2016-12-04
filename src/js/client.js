// import React, { Component } from "react"
// import ReactDOM from "react-dom"

const React = require("react")
const { Component } = React
const ReactDOM = require("react-dom")

const _ById = (id) => document.getElementById(id)

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


var options = {
    thumbNailData:  [{
      title: 'Show Courses',
      number: 12,
      header: 'Learn React',
      description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
      imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    },{
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    }]
  }

ReactDOM.render(<ThumbNailList {...options} />, _ById('content'))
/*
class Badge extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log(this)
    return (
      <button className="btn btn-primary" type="button">
        {this.props.title} <span className="badge">{this.props.number}</span>
      </button>
    )
  }
}

let options = {
  title : "Inbox",
  number : 32
}

ReactDOM.render(<Badge {...options} />, _ById('content'))

*/
/*
class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>This is one cool app!</h1>
      </div>
    );
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
*/

/*
const HoverableContainer = ChildComponent => {
    return class HoverableContainer extends Component {
        constructor(props) {
            super(props)
            this.state = {
                isHovered: false
            }
            render() {
                return (
                  <ChildComponent {...this.props } {...this.state }
                  onToggleHoverOn={this.handleToggleHoverOn.bind(this)}
                  onToggleHoverOff={this.handleToggleHoverOff.bind(this)}
                  />
                )
            }
            handleToggleHoverOn(){
              this.state = {
                  isHovered: true
              }
            }
            handleToggleHoverOff(){
              this.state = {
                  isHovered: false
              }
            }
        }
    }
}
*/

/*
// HOVER CONTAINER
function HoverableContainer(ChildComponent) {
    return class HoverableContainer extends Component {
        constructor(props) {
            super(props)
            this.state = {
                isHovered: false
            }

            this.handleToggleHoverOn = () => {
               this.setState({ isHovered: true })
            }

            this.handleToggleHoverOff = () => {
               this.setState({ isHovered: false })
            }
        }
        render() {
            console.log('HoverableContainer Component Rendered!', this.props)
            return (
              <ChildComponent {...this.props } {...this.state }
                //onToggleHoverOn = {() => this.setState({ isHovered: true })}
                onToggleHoverOn = {this.handleToggleHoverOn}
                //onToggleHoverOff = {() => this.setState({ isHovered: false })}
                onToggleHoverOff = {this.handleToggleHoverOff}
              />
            )
        }

    }

}

const Hoverable = HoverableContainer((props) => {
  const {
    children,
    isHovered,
    onClick,
    onToggleHoverOn,
    onToggleHoverOff,
    className
  } = props

  const classNameModifier = isHovered ? `${className}--is-hovered` : ''

  return (
    <div
      className={`${className} ${classNameModifier}`}
      onMouseEnter={onToggleHoverOn}
      onMouseLeave={onToggleHoverOff}
      onClick={onClick}>
      {children}
    </div>
  )
})


const Button = HoverableContainer((props) => {
    const { onToggleHoverOn, onToggleHoverOff, isHovered } = props
    const style = {
        backgroundColor: isHovered ? 'green' : 'red'
    }

    return (
      <button onMouseEnter = { onToggleHoverOn }
        onMouseLeave = { onToggleHoverOff }
        style = { style } >
        Click Me
      </button>
    )
})


// DROPDOWN CONTAINER  !this.state.isOpen
function OpenableContainer(ChildComponent) {
    return class OpenableContainer extends Component {
        constructor (props) {
            super(props)
            this.state = {
                isOpen : false
            }

            this.handleToggleOpen = () => {
               this.setState({ isOpen: !this.state.isOpen })
            }

          }


        render () {
            console.log('OpenableContainer Component Rendered!')
            return (
              <ChildComponent
                { ...this.state }
                { ...this.props }
                onToggleOpen= {this.handleToggleOpen}
              />
            )
        }
        // onToggleOpen= {() => this.setState({ isOpen: !this.state.isOpen })}
    }
}

const Dropdown = OpenableContainer((props) => {
    const { onToggleOpen, isOpen } = props
    const iconDirection = isOpen ? 'up' : 'down'

    return (
      <div className='menu'>
        <Hoverable className='menu__heading' onClick={onToggleOpen}>
          Dropdown
        </Hoverable>

        {renderMenuItems(isOpen)}

        <Hoverable className='caret-container' onClick={onToggleOpen}>
          <i className={`fa fa-caret-${iconDirection}`} />
        </Hoverable>
      </div>
    )
})


function renderMenuItems(isOpen){
  if(isOpen) {
    return (
      <ul className='menu__items'>
        <Hoverable className='menu__item'>Amounts</Hoverable>
        <Hoverable className='menu__item'>Amortization</Hoverable>
        <Hoverable className='menu__item'>Seniority</Hoverable>
      </ul>
    )
  } else {

  }
}

Hoverable.defaultProps = {
  onClick: () => {}
}

ReactDOM.render(<Dropdown />, _ById('content'))
*/
