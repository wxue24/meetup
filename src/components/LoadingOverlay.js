import { Overlay } from "react-native-elements";
import { ActivityIndicator, View } from "react-native";
import React from "react";

const LoadingOverlay = ({ isVisible }) => {
  return (
    <Overlay isVisible={isVisible} overlayStyle={{ justifyContent: "center" }}>
      <ActivityIndicator size="large" />
    </Overlay>
  );
};

export default LoadingOverlay;
