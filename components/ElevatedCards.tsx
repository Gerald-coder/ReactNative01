import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>Tap</Text>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1622425065/photo/business-travel-a-beautiful-asian-female-professional-on-business-trip-checking-into-the-hotel.webp?b=1&s=170667a&w=0&k=20&c=clkUDk5ywYHG_XCDdyAA1SexIZhe62h-1UUIokJOy7c=",
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>me</Text>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>to</Text>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww",
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.cardText}>scroll</Text>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardFive]}>
          <Text style={styles.cardText}>more</Text>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardSix]}>
          <Text style={styles.cardText}>😉😉</Text>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={styles.cardImage}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 15,
    // borderWidth: 2,
    // borderColor: "red",
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    margin: 4,
    borderRadius: 4,
    position: "relative",
  },
  cardText: {
    position: "absolute",
    bottom: 20,
    left: 10,
    color: "white",
    fontSize: 30,
    zIndex: 999,
  },
  cardOne: {
    backgroundColor: "#cad5e2",
    // elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#cad5e2",
  },
  cardTwo: {},
  cardThree: {},
  cardFour: {},
  cardFive: {},
  cardSix: {},
  cardImage: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
});
