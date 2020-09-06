import React, { useContext, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Button, Header, Avatar, Card } from "react-native-elements";

import Spacer from "../components/Spacer";

import { Context as AuthContext } from "../context/AuthContext";

const hobbies = [
  {
    category: "Team Sports",
    data: ["Soccer", "Basketball"],
  },
  {
    category: "Music",
    data: ["Guitar"],
  },
  {
    category: "Other",
    data: ["Board Games"],
  },
];

const user = {
  password: "password",
  fullName: "John Doe",
  firstName: "John",
  lastName: "Doe",
  grade: "Senior",
  school: "Claremont High",
  gender: "Male",
  location: "2543 California St, Pomona, CA",
};

const AccountScreen = ({navigation}) => {
  const { signout } = useContext(AuthContext);


  return (
    <ScrollView style={{ flex: 1 }}>
      <Header
        centerComponent={{
          text: "My Account",
          style: { color: "#fff", fontSize: 22 },
        }}
        rightComponent={{
          icon: "settings",
          color: "#fff",
          onPress: () => console.log("Navigate to Edit Account"),
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <Spacer>
          <Avatar
            rounded
            source={require("../../assets/tempAvatar.jpg")}
            imageProps={{
              style: { height: 150 },
            }}
            showAccessory
            accessory={{ size: 32 }}
            onAccessoryPress={() => console.log("Accessory Pressed")}
            size="xlarge"
          />
        </Spacer>

        <View style={{ marginLeft: -10, marginTop: 10 }}>
          <Card title={user.fullName}>
            <Text>
              {user.grade} at {user.school}
            </Text>
          </Card>
        </View>
      </View>

      <Card title="Hobbies and Interests" containerStyle={{ marginTop: -5 }}>
        {hobbies.map((item) => {
          return (
            <View key={item.category}>
              <Text style={{ fontWeight: "bold" }}>{item.category}</Text>
              {item.data.map((hobby) => (
                <Text key={hobby}>-{hobby}</Text>
              ))}
            </View>
          );
        })}
      </Card>

      <Card title="Location (Private)">
        <Text>{user.location}</Text>
      </Card>

      <Spacer>
        <Button title="Edit Account" onPress={() => navigation.navigate("AccountEdit")} />
      </Spacer>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
      <Spacer>
        <Button title="Share link" onPress={signout} />
      </Spacer>
    </ScrollView>
  );
};

AccountScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({});

export default AccountScreen;
