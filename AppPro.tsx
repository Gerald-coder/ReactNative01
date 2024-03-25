import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import FlatCard from "./components/FlatCard";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

const AppPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCards place={"Fancy Places"} />
        <FancyCards place={"Relaxation"} />
        {/* <FancyCards /> */}
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppPro;
