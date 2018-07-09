import React, { Component } from 'react'
import App from '../App'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../modules/auth'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      a: 1
    }
  }

  login = () => {
    this.props.login()
  }
  render() {
    return (
      <div className="App">
        <App>
          Login
          <Button primary>Primary</Button>
          <Button onClick={this.login}>Login</Button>
        </App>{' '}
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return {
    user: auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
