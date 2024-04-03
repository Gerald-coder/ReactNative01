import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from "formik";

export const passwordSchema = Yup.object().shape({
  passwordLen: Yup.number()
    .min(4, "should not be less than 4")
    .max(16, "should not be above 16 characters")
    .required("this field is required"),
});

const PassWord = () => {
  const [password, setPassword] = useState("");
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLen: number) => {
    let charactersList;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbersChar = "1234567890";
    const symbolsChar = "!@#$%^&*()_+";

    if (upperCase) {
      charactersList += uppercase;
    }
    if (lowerCase) {
      charactersList += lowercase;
    }
    if (numbers) {
      charactersList += numbersChar;
    }
    if (symbols) {
      charactersList += symbolsChar;
    }

    const passwordString = createPassword(charactersList, passwordLen);
    setPassword(passwordString);
    setIsPasswordGenerated(true);

    //
  };

  const createPassword = (characters: string, passwordLen: number) => {
    let result = "";
    for (let i = 0; i < passwordLen; i++) {
      const charInd = Math.round(Math.random() * characters.length);
      result += characters.charAt(charInd);
    }
    return result;
    //
  };

  const resetPassword = () => {
    setIsPasswordGenerated(false);
    setPassword("");
    setLowerCase(false);
    setNumbers(false);
    setSymbols(false);
    setUpperCase(false);
    //
  };

  // NEXT FORMIK

  const styles = StyleSheet.create({
    appContainer: {
      marginHorizontal: 18,
      marginTop: 80,
      borderWidth: 4,
      borderColor: "red",
      fontSize: 16,
    },
    formContainer: {},
    title: {},
  });

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ papasswordLen: "" }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              generatePasswordString(values.papasswordLen); ///TODO
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PassWord;
