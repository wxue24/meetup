import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { Header } from "react-native-elements";

import AccountForm from "../components/AccountForm";

import { Context as UserContext } from "../context/UserContext";

const AccountEditScreen = ({navigation}) => {
  const { editUser } = useContext(UserContext);

  return (
    <ScrollView>
      <Header
        centerComponent={{
          text: "Edit Account",
          style: { color: "#fff", fontSize: 22 },
        }}
        leftComponent={{
          icon: "arrow-back",
          color: "#fff",
          onPress: () => navigation.goBack()
        }}
      />
      <AccountForm methodName="Save Changes" method={editUser} />
    </ScrollView>
  );
};

AccountEditScreen.navigationOptions = {
  headerShown: false,
};

export default AccountEditScreen;
