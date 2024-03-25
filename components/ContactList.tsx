import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const contacts = [
  {
    uid: 1,
    name: "Chukwuemeka",
    status: "Receptionist Munalux",
    image:
      "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    uid: 2,
    name: "Gerald",
    status: "CEO Munalux",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    uid: 3,
    name: "Declan",
    status: "Founder Munalux",
    image:
      "https://images.unsplash.com/photo-1588653948445-eea74875ca86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    uid: 4,
    name: "Uzoma",
    status: "Product Designer Munalux",
    image:
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 15,
    // borderWidth: 2,
    // borderColor: "red",
  },
  container: {
    borderWidth: 2,
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  userImage: { width: 60, height: 60, borderRadius: 30 },
  userTexts: {
    flex: 1,
    gap: 3,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userStatus: {},
});

const ContactList = () => {
  return (
    <View>
      <Text style={styles.headingText}>People</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({ name, status, uid, image }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: image }} style={styles.userImage} />
            <View style={styles.userTexts}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;
