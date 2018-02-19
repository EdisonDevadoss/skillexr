import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import * as firebase from "firebase";

import { SocialIcon } from "react-native-elements";
import { GoogleSignin } from "react-native-google-signin";
import FBSDK, { LoginManager, AccessToken } from "react-native-fbsdk";

facebookSignIn = () => {
  LoginManager.logInWithReadPermissions(["public_profile"])
    .then(result => {
      if (result.isCancelled) {
        console.log("Login was cancelled");
      } else {
        console.log("Login was success" + result.grantedPermissions.toString());
        AccessToken.getCurrentAccessToken().then(accessTokenData => {
          const credential = firebase.auth
            .FacebookAuthProvider()
            .credential(accessTokenData.accessToken);
          firebase
            .auth()
            .signInWithCredentail(credential)
            .then(result => {
              console.log("Successfully", result);
            })
            .catch(error => {
              console.log("Failed", error);
            });
        });
      }
    })
    .catch(err => {
      console.log("failed", err);
    });
};
googleSignIn = () => {
  GoogleSignin.configure().then(() => {
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
        console.info(JSON.stringify(currentUser.toJSON()));
      })
      .catch(error => {
        console.error(`Login fail with error: ${error}`);
      });
  });
};
export default class SocailMediaLogin extends Component {
  render() {
    return (
      <View>
        <Text style={{ textAlign: "center", marginVertical: 10 }}>
          ─── OR ───
        </Text>
        <View style={styles.socailIcons}>
          <SocialIcon type="twitter" />
          <SocialIcon type="facebook" onPress={this.facebookSignIn} />
          <SocialIcon type="google" onPress={this.googleSignIn} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  socailIcons: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  }
});
