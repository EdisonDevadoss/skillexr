import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Label,
  Input,
  Toast
} from "native-base";
import { Image, StyleSheet, View } from "react-native";
import * as firebase from "firebase";
import { SocialIcon } from "react-native-elements";
const FBSDK = require("react-native-fbsdk");

const { LoginButton, AccessToken, LoginManager } = FBSDK;

export default class SkillSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  // email = "";
  // password = "";
  signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(loggedInUser => {
        console.log(
          `Login with user: ${JSON.stringify(loggedInUser.toJSON())}`
        );
        console.log("successfully");
        // Toast.show({
        //   text: "success",
        //   position: "bottom",
        //   buttonText: "Okay"
        // });
      })
      .catch(error => {
        console.log(`Login failed. Error = ${error}`);
        console.log("failed");
        // Toast.show({
        //   text: "Something wrong",
        //   position: "bottom",
        //   buttonText: "Okay"
        // });
      });
  };
  facebookSignIn = () => {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          alert("Login cancelled");
        } else {
          alert(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        alert("Login fail with error: " + error);
      }
    );
  };

  render() {
    const skillHeader = require("../images/Header-logo.png");
    return (
      <Container>
        <Header style={styles.skillBg}>
          <Body>
            <Title>
              <Image source={skillHeader} />
            </Title>
          </Body>
        </Header>

        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Eamil</Label>
              <Icon name="ios-home-outline" />
              <Input
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={email => {
                  this.setState({ email: email });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Icon active name="ios-key-outline" />
              <Input
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={password => {
                  this.setState({ password: password });
                }}
              />
            </Item>
            <Button
              block
              large
              primary
              title="signIn"
              style={styles.skillButtonBg}
              onPress={this.signIn}
            >
              <Text>Signin</Text>
            </Button>
          </Form>
          <View style={styles.socailIcons}>
            <SocialIcon type="twitter" />
            <SocialIcon type="facebook" onPress={this.facebookSignIn} />
            <SocialIcon type="google" />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  skillBg: {
    backgroundColor: "#d05121"
  },
  skillButtonBg: {
    backgroundColor: "#25384c",
    marginHorizontal: 20,
    marginVertical: 20
  },
  socailIcons: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  }
});
