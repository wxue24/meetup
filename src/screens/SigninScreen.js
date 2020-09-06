import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationEvents } from "react-navigation";

import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign-in"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign-in"
      />
      <NavLink
        text="Don't have an account? Sign-up instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SigninScreen;
