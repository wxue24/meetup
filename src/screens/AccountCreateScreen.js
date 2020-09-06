import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { Header, Avatar } from "react-native-elements";

import AccountForm from "../components/AccountForm";

import { Context as UserContext } from "../context/UserContext";

const AccountCreateScreen = () => {
  const { createNewUser } = useContext(UserContext);

  return (
    <ScrollView>
      <Header
        centerComponent={{
          text: "Create an Account",
          style: { color: "#fff", fontSize: 22 },
        }}
      />
      <Avatar
        rounded
        icon={{ name: "user", type: "feather" }}
        size="xlarge"
        overlayContainerStyle={{ backgroundColor: "grey" }}
        containerStyle={{ alignSelf: "center", marginTop: 20 }}
        showAccessory
        accessory={{ name: "add", size: 36 }}
        onAccessoryPress={() => {
          console.log("Choose or take picture");
        }}
      />
      <AccountForm methodName="Create Account" method={createNewUser} />
    </ScrollView>
  );
};

AccountCreateScreen.navigationOptions = {
  headerShown: false,
};

export default AccountCreateScreen;
