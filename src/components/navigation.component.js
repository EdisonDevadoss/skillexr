import React from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import SkillHome from "./skillHome.component";
import SkillSignIn from "./skillSignIn.component";
import SkillSignUp from "./skillSignUp.component";

const RootNavigator = StackNavigator({
  Home: {
    screen: SkillHome,
    navigationOptions: {
      header: null
    }
  },
  signIn: {
    screen: SkillSignIn,
    navigationOptions: {
      header: null
    }
  },
  signUp: {
    screen: SkillSignUp,
    navigationOptions: {
      header: null
    }
  }
});

export default RootNavigator;
