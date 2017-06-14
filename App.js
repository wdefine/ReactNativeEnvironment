import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  Dimensions
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Profile from "./components/Profile.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  ComponentWillMount() {
    let { height, width } = Dimensions.get("window");
    this.setState({ width: width, height: height });
  }
  onLayout() {
    let { height, width } = Dimensions.get("window");
    this.setState({ width: width, height: height });
  }
  render() {
    let { height, width } = Dimensions.get("window");
    return (
      <NativeRouter>
        <View onLayout={() => this.onLayout()} style={styles.container}>
          <View style={[{ height: height, width: width }]}>
            <ScrollView
              horizontal
              pagingEnabled
              pagingEnabled={true}
              style={[{ width: this.state.width }]}
            >
              <View>

                <Profile width={this.state.width} height={this.state.height} />
              </View>
              <View>
                <View style={styles.nav}>
                  <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                    <Text>Home</Text>
                  </Link>
                  <Link
                    to="/about"
                    underlayColor="#f0f4f7"
                    style={styles.navItem}
                  >
                    <Text>Settings</Text>
                  </Link>
                </View>
                <Route
                  exact
                  path="/"
                  component={() =>
                    <Home
                      width={this.state.width}
                      height={this.state.height}
                    />}
                />
                <Route
                  path="/about"
                  component={() =>
                    <About
                      width={this.state.width}
                      height={this.state.height}
                    />}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </NativeRouter>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  }
});

AppRegistry.registerComponent("App", () => App);
