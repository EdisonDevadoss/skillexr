import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Label,
  Input,
  Toast
} from "native-base";
import * as firebase from "firebase";

import { SocialIcon } from "react-native-elements";
import { GoogleSignin } from "react-native-google-signin";
import FBSDK, { LoginManager, AccessToken } from "react-native-fbsdk";

export default class SkillSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      reEnterPassword: "",
      verificationCode: ""
    };
  }

  showVerification = false;
  signUp = () => {
    if (this.state.password == this.state.reEnterPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.showVerification = true;
          console.log("successfully");
        })
        .catch(() => {
          console.log("Register failed");
        });
    }
  };
  facebookSignIn = () => {
    LoginManager.logInWithReadPermissions(["public_profile", "email"])
      .then(result => {
        if (result.isCancelled) {
          console.log("Login was cancelled");
        }

        return AccessToken.getCurrentAccessToken();
      })
      .then(data => {
        const credential = firebase.auth.FacebookAuthProvider.credential(
          data.accessToken
        );
        return firebase.auth().signInWithCredential(credential);
        console.log("firebase success");
      })
      .then(currentUser => {
        console.log(
          `Facebook login with user: ${JSON.stringify(currentUser.toJSON())}`
        );
      })
      .catch(err => {
        console.log("failed", err);
      });
  };
  googleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        "241042837277-r1ku73b73cq9d03n0q0j2iubinsvvp7n.apps.googleusercontent.com",
      offline: true
    }).then(() => {
      GoogleSignin.signIn()
        .then(data => {
          // create a new firebase credential with the token
          const credential = firebase.auth.GoogleAuthProvider.credential(
            data.idToken,
            data.accessToken
          );
          // login with credential
          return firebase
            .auth()
            .signInWithCredential(credential)
            .then(result => {
              console.log("Successfully", result);
            })
            .catch(error => {
              console.log("Failed", error);
            });
        })
        .then(currentUser => {
          console.log(JSON.stringify(currentUser.toJSON()));
        })
        .catch(error => {
          console.log(`Login fail with error: ${error}`);
        });
    });
  };
  render() {
    const skillHeader = require("../images/Header-logo.png");
    let showVerification = this.showVerification;
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
            <Item floatingLabel>
              <Label>Re-Enter-Password</Label>
              <Icon active name="ios-key-outline" />
              <Input
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={reEnterPassword => {
                  this.setState({ reEnterPassword: reEnterPassword });
                }}
              />
            </Item>

            <Button
              block
              large
              primary
              style={styles.skillButtonBg}
              onPress={this.signUp}
            >
              <Text>Next</Text>
            </Button>
          </Form>
          <Text style={{ textAlign: "center", marginVertical: 10 }}>
            ─── OR ───
          </Text>
          <View style={styles.socailIcons}>
            <SocialIcon type="twitter" />
            <SocialIcon type="facebook" onPress={this.facebookSignIn} />
            <SocialIcon type="google" onPress={this.googleSignIn} />
          </View>
          <View style={styles.forgetPass}>
            <View style={styles.report}>
              <Text>Report</Text>
              <Text style={styles.pass}>Signin Problem</Text>
            </View>
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
  },
  forgetPass: {
    alignItems: "center",
    marginTop: 10
  },
  pass: {
    textDecorationLine: "underline"
  },
  report: {
    marginTop: 5,
    flexDirection: "row"
  }
});
