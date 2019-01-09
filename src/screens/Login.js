import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import startTabs from './MainTabs/startMainTabs';

class LoginScreen extends Component {

  loginHandler = () => {
    startTabs();
  };

  render () {
    return (
      <View>
        <Text> Login Screen!! </Text>
        <Button title="Login" onPress={this.loginHandler}/>
      </View>
    );
  }
}

export default LoginScreen;