// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: 'Subscribe'}

  toggleSubscribeStatus = () => {
    const {isSubscribed} = this.state
    this.setState(prevState => {
      if (prevState.isSubscribed === 'Subscribe') {
        return {isSubscribed: 'Subscribed'}
      }
      return {isSubscribed: 'Subscribe'}
    })
  }

  /* returnSubscribeButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return <button onClick={this.isSubscribed}>Subscribed</button>
    }
    return <button onClick={this.isSubscribed}>Subscribe</button>
  } */

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="welcome-app-bg-container">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="sub-heading">Thank you! Happy Learning</p>
        <button onClick={this.toggleSubscribeStatus}>{isSubscribed}</button>
      </div>
    )
  }
}

export default Welcome
