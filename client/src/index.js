import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.scss'

if (module.hot) {
  module.hot.accept()
}

class App extends Component {
  render() {
    return (
      <div>hi</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
