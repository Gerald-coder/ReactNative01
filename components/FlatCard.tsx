import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 15,
    // borderWidth: 2,
    // borderColor: "red",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
    // flexWrap: "wrap",
    // borderWidth: 2,
    // borderColor: "red",
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    position: "absolute",
    bottom: 20,
    left: 10,
    color: "white",
    fontSize: 30,
    zIndex: 999,
  },
  cardone: {
    position: "relative",
  },
  cardtwo: {
    position: "relative",
  },
  cardthree: {
    position: "relative",
  },
  cardImage: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
});

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Owerri</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardone]}>
          <Text style={styles.cardText}>FUTO</Text>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1453747063559-36695c8771bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardtwo]}>
          <Text style={styles.cardText}>POLY</Text>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1595521624992-48a59aef95e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fHww",
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardthree]}>
          <Text style={styles.cardText}>IMSU</Text>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1613402900762-25b427ea5d45?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fHww",
            }}
            style={styles.cardImage}
          />
        </View>
        {/* <View style={[styles.card, styles.cardone]}>
          <Text>red</Text>
        </View> */}
      </View>
    </View>
  );
};

export default FlatCard;
