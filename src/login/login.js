import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TextInput from '../components/text-input';
import {loginActions} from './actions';

@connect(
  state => ({
    userName: state.login.userName,
    password: state.login.password
  }),
  loginActions
)
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }
  validateUser = (userName, password) => {
    if (userName && password)
     return true;
  }

  navigateToDashboard = () => {
    const {userName, password} = this.props;
    const validation = this.validateUser(userName, password);
    if (validation) {
      this.props.history.push('/charthome');
    } else {
      this.setState({message: "Please enter user name and password"});
    }    
  }

  render() {
    const {
      userName, password, updateUserName, updatePassword
    } = this.props;
    const {message} = this.state;

    return (
      <div className="container">
        <TextInput
          type="text"
          placeholder="Enter Username"
          labelName="Username"
          value={userName}
          onChange={updateUserName}
          icon
          iconName="envelope"
          size="sm"
        />
        <TextInput
          type="password"
          placeholder="Enter Password"
          labelName="password"
          value={password}
          onChange={updatePassword}
          icon
          iconName="key"
          size="sm"
        />
        <button type="submit" onClick={this.navigateToDashboard}>Login</button>
        <span className="error">{message}</span>
      </div>
    );
  }
}

Login.propTypes = {
  userName: PropTypes.string,
  password: PropTypes.string,
  updateUserName: PropTypes.func,
  updatePassword: PropTypes.func,
  history: PropTypes.object
};

export default Login;
