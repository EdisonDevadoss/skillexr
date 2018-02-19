/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import * as firebase from "firebase";

export default class AuthFirebase extends React.Component {
  constructor(props) {
    firebase.initializeApp(config);
    super(props);
    this.unsubscriber = null;
  }
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged();
  }
  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }
  onAnonymousLogin = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        console.log(`Login successfully`);
      })
      .catch(error => {
        console.log(`Login failed. Error = ${error}`);
      });
  };
  onRegister = () => {
    firebase.auth().createUserWithEmailAndPassword();
  };
  onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword()
      .then(() => {
        console.log(success);
      })
      .catch(err => {
        console.log(`Login failed. Error = ${error}`);
      });
  };
  render() {
    return;
  }
}
