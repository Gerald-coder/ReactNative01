import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 15,
    // borderWidth: 2,
    // borderColor: "red",
  },
  card: {
    width: 350,
    height: 370,
    borderRadius: 6,
    backgroundColor: "#7B8788",
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    // backgroundColor: "#ffffff",
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.5,
  },
  headingContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  bodyContainerText: { color: "#ffffff" },
  footerContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 6,
  },
  portfolio: {
    fontSize: 16,
    color: "#000000",
    backgroundColor: "#00ffff",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.5,
  },
});

const openWebsite = (website: string) => {
  Linking.openURL(website);
};
const ActionCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Text></Text>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            There's always an experience with owerri
          </Text>
        </View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww",
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyContainerText}>
            If you see no luxry else where, come and look for it in our humble
            abode, where we get all kinds of luxury needs satisfied with ease,
            you live a premuim life of your choice, we plan, you enjoy, no need
            to look else where , OWerri got you covered, let us be you plug for
            luxury and good life
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite("https://gerald-oduigwe.netlify.app")}
            style={styles.portfolio}
          >
            <Text>Read more....</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;
