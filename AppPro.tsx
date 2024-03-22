import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import FlatCard from "./components/FlatCard";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCard from "./components/ActionCard";

const AppPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCards />
        <FancyCards />
        {/* <FancyCards /> */}
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppPro;
