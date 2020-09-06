import React, { useState, useContext, useEffect } from "react";
import { View, Picker } from "react-native";
import {
  Input,
  Divider,
  Text,
  CheckBox,
  Icon,
  Overlay,
  Button,
} from "react-native-elements";
import LoadingOverlay from "../components/LoadingOverlay";

import { Context as UserContext } from "../context/UserContext";

const hobbies = [
  {
    category: "Team Sports",
    data: [
      "Soccer",
      "Basketball",
      "Badminton",
      "Baseball",
      "Frisbee",
      "Tennis",
      "Volleyball",
    ],
  },
  {
    category: "Music",
    data: ["Guitar", "Piano", "Drums", "Jazz", "Orchestra"],
  },
  {
    category: "Arts and Crafts",
    data: ["Knitting", "Painting", "Photography"],
  },
  {
    category: "Individual Sports",
    data: ["Rock Climbing", "Mountain Biking"],
  },
  {
    category: "Nature",
    data: ["Astronomy", "Bird-watching", "Hiking"],
  },
  {
    category: "Other",
    data: ["Board Games", "Cooking", "Dancing"],
  },
];

const AccountForm = ({ methodName, method }) => {
  //MethodName should be either "Create Account" or "Save Changes"
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  // const [userHobbies, setUserHobbies] = useState([]);
  // const [userData, setUserData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   highSchool: "",
  //   grade: 9,
  //   //avatar: null
  //   location: {
  //     address: "",
  //     zip: "",
  //     city: "",
  //     state: "",
  //   },
  // });
  const [loading, setLoading] = useState(false);

  const {
    state,
    getUserData,
    editUser,
    setFirst,
    setLast,
    setSchool,
    setGrade,
    setAddress,
    setCity,
    setState,
    setZip,
    setHobbies
  } = useContext(UserContext);

  useEffect(() => {
    if (methodName.localeCompare("Save Changes") === 0) {
      getUserData();
    }
  }, []);

  const validateUserData = () => {
    //TODO make sure user has inputted correct fields
  };

  return (
    <View>
      <View style={{ margin: 20 }}>
        <Text h4 style={{ alignSelf: "center", marginBottom: 20 }}>
          Personal Info
        </Text>
        <Input
          label="First Name"
          textContentType="givenName"
          value={state.firstName}
          onChangeText={(text) => setFirst(text)}
        />
        <Input
          label="Last Name"
          textContentType="familyName"
          value={state.lastName}
          onChangeText={(text) => setLast(text)}
        />
        <Input
          label="High School"
          value={state.highSchool}
          onChangeText={(text) => setSchool(text)}
        />

        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "lightslategrey",
            }}
          >
            Grade:{"       "}
          </Text>
          <Picker
            selectedValue={state.grade}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemPosition) => setGrade(itemValue)}
          >
            <Picker.Item label="9th" value={9} />
            <Picker.Item label="10th" value={10} />
            <Picker.Item label="11th" value={11} />
            <Picker.Item label="12th" value={12} />
          </Picker>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              marginHorizontal: 10,
            }}
            h4
          >
            Location (Private)
          </Text>
          <Icon
            name="question-circle"
            type="font-awesome"
            color="#2289dc"
            onPress={() => setOverlayIsVisible(true)}
          />
        </View>
        <Input
          label="Address"
          textContentType="fullStreetAddress"
          value={state.location.address}
          onChangeText={(text) => setAddress(text)}
        />
        <View style={{ flexDirection: "row" }}>
          <Input
            containerStyle={{ width: 100 }}
            label="Zip Code "
            textContentType="postalCode"
            value={state.location.zip}
            onChangeText={(text) => setZip(text)}
          />
          <Input
            containerStyle={{ width: 150 }}
            label="City"
            textContentType="addressCity"
            value={state.location.city}
            onChangeText={(text) => setCity(text)}
          />
          <Input
            containerStyle={{ width: 100 }}
            label="State"
            placeholder="CA"
            textContentType="addressState"
            value={state.location.state}
            onChangeText={(text) => setState(text)}
          />
        </View>

        <Divider />
        <Text h4 style={{ alignSelf: "center", marginBottom: 20 }}>
          Hobbies and Interests
        </Text>
        <View>
          {hobbies.map((item) => {
            return (
              <View key={item.category}>
                <Text
                  style={{
                    alignSelf: "center",
                    marginBottom: 10,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "#2289dc",
                  }}
                >
                  {item.category}
                </Text>
                {item.data.map((hobby) => (
                  <CheckBox
                    center
                    title={hobby}
                    checked={state.hobbies.includes(hobby)}
                    key={hobby}
                    onPress={() => {
                      if (state.hobbies.includes(hobby)) {
                        setHobbies(state.hobbies.filter((h) => hobby !== h));
                      } else {
                        setHobbies([...state.hobbies, hobby]);
                      }
                    }}
                  />
                ))}
              </View>
            );
          })}
        </View>
        <Divider />

        <Button
          title={methodName}
          containerStyle={{ marginTop: 30 }}
          onPress={() => {
            setLoading(true);
            method(setLoading);
          }}
        />
      </View>

      <Overlay
        isVisible={overlayIsVisible}
        onBackdropPress={() => setOverlayIsVisible(false)}
        overlayStyle={{ width: 300, height: 500 }}
      >
        <View>
          <Text>What we do with your location</Text>
          <Button title="Go back" onPress={() => setOverlayIsVisible(false)} />
        </View>
      </Overlay>

      <LoadingOverlay isVisible={loading} />
    </View>
  );
};

export default AccountForm;
