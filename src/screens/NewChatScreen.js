import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Header } from "react-native-elements";

const NewChatScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        centerComponent={{
          text: "Start a conversation",
          style: { color: "#fff", fontSize: 22 },
        }}
        leftComponent={{
          icon: "arrow-back",
          color: "#fff",
          onPress: () => navigation.navigate("Dashboard"),
        }}
        rightComponent={{
            icon: "search",
            color: "#fff",
            onPress: () => navigation.navigate("SearchMessages"),
          }}
      />
      <Text>NewChatScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NewChatScreen;
