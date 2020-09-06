import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { Header, Icon } from "react-native-elements";

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: "New room created.",
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    {
      _id: 1,
      text: "Henlo!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Test User",
      },
    },
  ]);

  const handleSend = (newMessage) => {
    setMessages(GiftedChat.append(messages, newMessage));
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#2289dc",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Icon name="send" size={28} color="#2289dc" />
        </View>
      </Send>
    );
  };

  const renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  };

  const scrollToBottomComponent = () => {
    return (
      <View style={styles.bottomComponentContainer}>
        <Icon name="arrow-drop-down" size={36} color="#2289dc" />
      </View>
    );
  };

  return (
    <>
      <Header
        centerComponent={{
          text: navigation.getParam("title"),
          style: { color: "#fff", fontSize: 22 },
        }}
        leftComponent={{
          icon: "arrow-back",
          color: "#fff",
          onPress: () => navigation.navigate("Dashboard"),
        }}
      />
      <GiftedChat
        messages={messages}
        onSend={(newMessage) => handleSend(newMessage)}
        user={{ _id: 1, name: "User Test" }}
        renderBubble={renderBubble}
        placeholder="Type your message here..."
        showUserAvatar
        renderSend={renderSend}
        scrollToBottomComponent={scrollToBottomComponent}
        renderLoading={renderLoading}
      />
    </>
  );
};

ChatScreen.navigationOptions = {
  //TODO Hide bottom tab navigator
};

const styles = StyleSheet.create({
  sendingContainer: {
    marginBottom: 5,
    marginRight: 5,
  },
  bottomComponentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
