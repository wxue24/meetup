import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "react-native";

import AccountCreateScreen from "./src/screens/AccountCreateScreen";
import AccountEditScreen from "./src/screens/AccountEditScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ChatScreen from "./src/screens/ChatScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import DiscoverScreen from "./src/screens/DiscoverScreen";
import FriendRecScreen from "./src/screens/FriendRecScreen";
import InterestGroupScreen from "./src/screens/InterestGroupScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SearchMessagesScreen from "./src/screens/SearchMessagesScreen";
import NewChatScreen from "./src/screens/NewChatScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as UserProvider } from "./src/context/UserContext";

import { setNavigator } from "./src/navigationRef";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: "#2289dc",
  },
  headerTintColor: "#fff",
  headerShown: false,
};

const chatFlow = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: { title: "Messages" },
    },
    Chat: {
      screen: ChatScreen,
      // navigationOptions: {title: ""}
    },
    SearchMessages: SearchMessagesScreen,
    NewChat: NewChatScreen,
  },
  {
    defaultNavigationOptions,
    navigationOptions: {
      tabBarIcon: <Feather name="home" size={24} />,
      tabBarOptions: {
        showLabel: false,
      },
    },
  }
);

const discoverFlow = createStackNavigator(
  {
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: { title: "Search" },
    },
    InterestGroup: InterestGroupScreen,
    FriendRec: FriendRecScreen,
  },
  {
    defaultNavigationOptions,
    navigationOptions: {
      tabBarIcon: <Feather name="search" size={24} />,
      tabBarOptions: {
        showLabel: false,
      },
    },
  }
);

const resolveAccount = createSwitchNavigator(
  {
    accountFlow: createStackNavigator(
      {
        Account: {
          screen: AccountScreen,
          navigationOptions: { title: "My Account" },
        },
        AccountEdit: AccountEditScreen,
      },
      {
        defaultNavigationOptions,
      }
    ),
  },
  {
    navigationOptions: {
      tabBarIcon: <Feather name="user" size={24} />,
      tabBarOptions: {
        showLabel: false,
      },
    },
  }
);

const switchNavigator = createSwitchNavigator(
  {
    resolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator(
      {
        Signin: SigninScreen,
        Signup: SignupScreen,
        AccountCreate: AccountCreateScreen,
      },
      {
        initialRouteName: "Signup",
      }
    ),
    mainFlow: createBottomTabNavigator(
      {
        chatFlow,
        discoverFlow,
        resolveAccount,
      },
      {
        defaultNavigationOptions: { headerShown: false },
      }
    ),
  },
  {
    initialRouteName: "resolveAuth",
  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <UserProvider>
      <AuthProvider>
        <StatusBar translucent={false} />
        <App ref={(navigator) => setNavigator(navigator)} />
      </AuthProvider>
    </UserProvider>
  );
};
