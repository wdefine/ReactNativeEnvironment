import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Text style={[styles.profile, { width: this.props.width }]}>
        This is Your Profile
      </Text>
    );
  }
}
let styles = StyleSheet.create({
  profile: {
    flex: 1
  }
});
