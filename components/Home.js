import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Text style={[styles.home, { width: this.props.width }]}>
        Home
      </Text>
    );
  }
}

let styles = StyleSheet.create({
  home: {
    fontSize: 20,
    flex: 1
  }
});
