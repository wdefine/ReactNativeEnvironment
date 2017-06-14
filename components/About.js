import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Text style={[styles.about, { width: this.props.width }]}>
        Settings
      </Text>
    );
  }
}

let styles = StyleSheet.create({
  about: {
    fontSize: 20,
    flex: 1
  }
});
