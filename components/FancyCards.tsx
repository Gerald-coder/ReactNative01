import { Image, StyleSheet, Text, View } from "react-native";
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
    height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: "#7B8788",
    elevation: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardLabel: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 6,
  },
  cardDescription: {
    color: "#f2f2f2",
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: "#ffffff",
  },
});

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
          <Text style={styles.cardFooter}>Come have fun</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;
