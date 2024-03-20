import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import FlatCard from "./components/FlatCard";

const AppPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppPro;
