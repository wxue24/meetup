import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Header, Button, Divider } from "react-native-elements";
import Spacer from "../components/Spacer";

const DiscoverScreen = () => {
  return (
    <>
      <Header
        centerComponent={{
          text: "Search",
          style: { color: "#fff", fontSize: 22 },
        }}
      />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Spacer>
          <Button title="Find a Group" />
        </Spacer>
        <Spacer>
          <View
            style={{ flexDirection: "row" }}
          >
            <Divider style={{ flex: 1, backgroundColor: "black", alignSelf: "center" }} />
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 20
              }}
            >
              or
            </Text>
            <Divider style={{ flex: 1, backgroundColor: "black", alignSelf: "center" }} />
          </View>
        </Spacer>
        <Spacer>
          <Button title="Discover People" />
        </Spacer>
      </View>
    </>
  );
};

DiscoverScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({});

export default DiscoverScreen;
