import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";

function App() {
  return (
    <SafeAreaView>
      <View style={styles.conatiner}>
        <Text>Hello Gerald boo</Text>
        {/* <StatusBar style="dark-content" /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {},
});

export default App;

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello gerry welcome to react native</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
