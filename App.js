/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import RootNavigator from "./src/components/navigation.component";
import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyA7vbwCRyHHG4rZFJS7siIw7TzPjbNY2f4",
  authDomain: "dinder-a6dfa.firebaseapp.com",
  databaseURL: "https://dinder-a6dfa.firebaseio.com",
  projectId: "dinder-a6dfa",
  storageBucket: "dinder-a6dfa.appspot.com",
  messagingSenderId: "241042837277"
};
export default class App extends Component<{}> {
  constructor(props) {
    firebase.initializeApp(config);
    super(props);
  }
  render() {
    return <RootNavigator />;
  }
}
