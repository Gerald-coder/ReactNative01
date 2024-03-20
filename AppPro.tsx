import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  useColorScheme,
  StyleSheet,
} from "react-native";

function AppPro(): JSX.Element {
  const isDarkMood = useColorScheme() === "dark";
  const scheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMood ? styles.whiteText : styles.darkText}>
          Hello Ts {scheme}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dark: {
    backgroundColor: "#000000",
  },
  light: {
    backgroundColor: "#ffffff",
  },
  whiteText: {
    color: "#ffffff",
  },
  darkText: {
    color: "#000000",
  },
});

export default AppPro;
