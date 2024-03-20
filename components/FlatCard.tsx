import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardone]}>
          <Text>red</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  container: {},
  card: {
    height: 100,
    width: 100,
  },
  cardone: {
    backgroundColor: "#ef5354",
  },
});
