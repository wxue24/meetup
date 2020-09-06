import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { ListItem, Header, Icon } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";

const tempAvatar = require("../../assets/tempAvatar.jpg");
import moment from "moment";

const messages = [
  {
    _id: 0,
    lastText: "Hello!jfhkdsfhfhdskjdjhdjhfkshfhskjdfshfhsdfhsdkjfhdskfhsk",
    timestamp: 13242453,
    user: {
      _id: 2,
      name: "John Doe",
      avatar: tempAvatar,
    },
  },
  {
    _id: 1,
    lastText: "Hello!",
    timestamp: 13242453,
    user: {
      _id: 2,
      name: "John Doe",
      avatar: tempAvatar,
    },
  },
  {
    _id: 2,
    lastText: "Hello!",
    timestamp: 13242453,
    user: {
      _id: 2,
      name: "John Doe",
      avatar: tempAvatar,
    },
  },
  {
    _id: 3,
    lastText: "Hello!",
    timestamp: 13242453,
    user: {
      _id: 2,
      name: "John Doe",
      avatar: tempAvatar,
    },
  },
  {
    _id: 4,
    lastText: "Hello!",
    timestamp: 13242453,
    user: {
      _id: 2,
      name: "John Doe",
      avatar: tempAvatar,
    },
  },
  {
    _id: 5,
    lastText: "Hello!",
    timestamp: 13242453,
    user: {
      _id: 2,
      name: "John Doe",
      avatar: tempAvatar,
    },
  },
  {
    _id: 6,
    lastText: "Hello!!!",
    timestamp: 13242453,
    user: {
      _id: 2,
      name: "John Doe",
      avatar: tempAvatar,
    },
  },
  {
    _id: 7,
    lastText: "Hello!",
    timestamp: 13242453,
    user: {
      _id: 2,
      name: "John Doe",
      avatar: tempAvatar,
    },
  },
  {
    _id: 8,
    lastText: "Hello!",
    timestamp: 13242453,
    user: {
      _id: 2,
      name: "John Doe",
      avatar: tempAvatar,
    },
  },
];

const DashboardScreen = ({ navigation }) => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetch messages from firebase
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header
        centerComponent={{
          text: "Messages",
          style: { color: "#fff", fontSize: 22 },
        }}
        rightComponent={{
          icon: "search",
          color: "#fff",
          onPress: () => navigation.navigate("SearchMessages"),
        }}
      />
      <FlatList
        data={messages}
        keyExtractor={(item) => `${item._id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Chat", { title: item.user.name })
              }
            >
              <ListItem
                title={item.user.name}
                subtitle={item.lastText}
                subtitleProps={{ numberOfLines: 1 }}
                rightSubtitle={moment(item.timestamp).fromNow()}
                rightSubtitleStyle={{ marginBottom: 20 }}
                leftAvatar={{
                  source: require("../../assets/tempAvatar.jpg"),
                  imageProps: {
                    style: { height: 50 },
                  },
                }}
                bottomDivider
              />
            </TouchableOpacity>
          );
        }}
      />
      <Icon
        name="add"
        size={24}
        color="#2289dc"
        containerStyle={styles.addChat}
        reverse
        onPress={() => navigation.navigate("NewChat")}
      />
    </View>
  );
};

DashboardScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  addChat: {
    position: "absolute",
    zIndex: 1,
    marginTop: 620,
    marginLeft: 310,
  },
});

export default DashboardScreen;
