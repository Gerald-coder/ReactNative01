import { StyleSheet, Text, View } from "react-native";
import React from "react";

const contacts = [
  { uid: 1, name: "Gerald", status: "CEO Munalux" },
  {
    uid: 2,
    name: "Chukwuemeka",
    status: "Receptionist Munalux",
    image: "https://avatars.githubusercontent.com/u/11613311?v=4",
  },
  { uid: 1, name: "Gerald", status: "CEO Munalux" },
];

const styles = StyleSheet.create({});

const ContactList = () => {
  return (
    <View>
      <Text>ContactList</Text>
    </View>
  );
};

export default ContactList;
