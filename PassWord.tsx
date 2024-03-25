import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Yup from "yup";

export const passwordSchema = Yup.object().shape({
  passwordLen: Yup.number()
    .min(4, "should not be less than 4")
    .max(16, "should not be above 16 characters")
    .required("this field is required"),
});

const PassWord = () => {
  return (
    <SafeAreaView>
      <Text>PassWord</Text>
    </SafeAreaView>
  );
};

export default PassWord;
