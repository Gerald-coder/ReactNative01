import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1600255940203-05fd89e1d7af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXV0aWZ1bCUyMHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Imo Owerri</Text>
          <Text style={styles.cardLabel}>Douglas</Text>
          <Text style={styles.cardDescription}>
            Owerri is a city of luxury in Nigeria, Known for its luxurous hotels
            and lounges, when you speak luxury, you speak owerri
          </Text>
          <Text style={styles.cardFooter}>COme have fun</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 15,
    // borderWidth: 2,
    // borderColor: "red",
  },
  card: {},
  cardElevated: {},
  cardImage: { height: 180 },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
