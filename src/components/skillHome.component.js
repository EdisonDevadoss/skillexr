import React, { Component } from "react";
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
  Input
} from "native-base";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SkillHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedBadge: [
        {
          images: require("../images/images.png"),
          name: "Xcsisuss",
          service: "Freelancer",
          badge: "copywriting",
          addBadge: 3,
          city: "Chennai"
        },
        {
          images: require("../images/images.png"),
          name: "Prrevdsc",
          service: "Freelancer",
          badge: "copywriting",
          addBadge: 3,
          city: "Hyderabad"
        },
        {
          images: require("../images/images.png"),
          name: "Bbydda",
          service: "Company",
          badge: "copywriting",
          addBadge: 3,
          city: "Mumbai"
        },
        {
          images: require("../images/images.png"),
          name: "Xcsisuss",
          service: "Freelancer",
          badge: "copywriting",
          addBadge: 3,
          city: "Chennai"
        },
        {
          images: require("../images/images.png"),
          name: "Prrevdsc",
          service: "Freelancer",
          badge: "copywriting",
          addBadge: 3,
          city: "Hyderabad"
        },
        {
          images: require("../images/images.png"),
          name: "Bbydda",
          service: "Company",
          badge: "copywriting",
          addBadge: 3,
          city: "Mumbai"
        }
      ]
    };
  }
  serviceName = "";
  location = "";

  signIn = () => {
    console.log(this.serviceName);
    console.log(this.location);
    this.props.navigation.navigate("signIn");
  };
  signUp = () => {
    this.props.navigation.navigate("signUp");
  };

  render() {
    const skillHeader = require("../images/Header-logo.png");
    return (
      <Container>
        <Header style={styles.skillBg}>
          <Body>
            <Title
              style={{
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image source={skillHeader} />
            </Title>
          </Body>
        </Header>

        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Service/Name</Label>

              <Icon name="ios-home-outline" />
              <Input
                onChangeText={serviceName => (this.serviceName = serviceName)}
              />
            </Item>
            <Item floatingLabel>
              <Label>Location</Label>
              <Icon active name="ios-pin-outline" />
              <Input onChangeText={loaction => (this.location = location)} />
            </Item>
            <Button block large style={styles.skillButtonBg} onPress="">
              <Text>Search</Text>
            </Button>
          </Form>
          <Grid>
            <Row>
              <Col>
                <Button
                  block
                  style={styles.skillButtonBg}
                  onPress={this.signIn}
                >
                  <Text>Signin</Text>
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  style={styles.skillButtonBg}
                  onPress={this.signUp}
                >
                  <Text>Signup for free</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
          <Text>Suggested Badge</Text>
          <Grid>
            <Row>
              <ScrollView
                horizontal
                contentContainerStyle={{ width: 1200, height: 250 }}
                style={styles.scrollView}
              >
                {this.state.suggestedBadge.map((item, index) => (
                  <Col style={styles.badges}>
                    <View key={index} style={styles.badgeContent}>
                      <Image style={styles.badgeImage} source={item.images} />
                      <Text style={styles.badgeName}>{item.name}</Text>
                      <Text style={styles.badgeName}>{item.service}</Text>
                      <View style={styles.addBadges}>
                        <Text style={styles.badgeName}>{item.badge}</Text>
                        <Text style={styles.badgeName}> +{item.addBadge}</Text>
                      </View>
                      <Text>____</Text>
                      <Text style={styles.badgeName}>{item.city}</Text>
                    </View>
                  </Col>
                ))}
                <Col style={styles.badges}>
                  <View style={styles.badgeContent}>
                    <View style={styles.showMoreBadge}>
                      <Text>Show more</Text>
                    </View>
                  </View>
                </Col>
              </ScrollView>
            </Row>
          </Grid>
          <Text style={styles.version}>Version 0.01</Text>
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
  formLabel: {
    marginVertical: 5
  },
  badges: {
    backgroundColor: "#dedede",
    marginHorizontal: 5
  },
  badgeContent: {
    marginTop: 10,
    alignItems: "center"
  },
  badgeImage: {
    height: 100,
    borderRadius: 50,
    width: 100
  },
  badgeName: {
    marginTop: 3
  },
  addBadges: {
    flexDirection: "row"
  },
  showMoreBadge: {
    marginVertical: 90,
    textAlign: "center"
  },
  scrollView: {
    marginVertical: 10
  },
  version: {
    textAlign: "center",
    marginBottom: 20
  }
});
