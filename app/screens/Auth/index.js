import React, { Component } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

import * as actions from './actions';
import TextInput from '../../components/TextInput';
import Card from '../../components/Card';

export default class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    }
  }

  onChange(type, value) {
    let state = this.state;
    state[type] = value;
    this.setState(state);
  }

  onLogin() {
    this.props.dispatch(actions.authUser(this.state.email, this.state.password));
  }

  render() {
    return (
      <Card>
        <TextInput placeholder='Email' onChangeText={this.onChange.bind(this, 'email')} />
        <TextInput placeholder='Password' onChangeText={this.onChange.bind(this, 'password')} secureTextEntry />
        <Button onPress={this.onLogin.bind(this)} title="Login" accessibilityLabel="Login" />
      </Card>
    );
  }
}

const styles = StyleSheet.create({

});
