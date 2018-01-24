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

export default class SkillSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      reEnterPassword: ""
    };
  }
  signUp = () => {
    if (this.state.password == this.state.reEnterPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          console.log("successfully");
        })
        .catch(() => {
          console.log("Register failed");
        });
    }
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
  }
});
