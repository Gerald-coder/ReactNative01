import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
// import { passwordSchema } from "./components/Rough";
import * as Yup from "yup";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const passwordSchema = Yup.object().shape({
  passwordLen: Yup.number()
    .min(4, "must not be less than 3 characters")
    .max(16, "must not be above 16")
    .required("field is required"),
});

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    gap: 4,
    padding: 6,
  },
  title: {
    fontSize: 40,
    flex: 1,
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-end",
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
    padding: 4,
    width: 300,
  },

  inputColumn: {},
  inputStyle: {
    height: 45,
    width: 80,
    borderWidth: 2,
    padding: 6,
    borderRadius: 10,
  },
  formAction: {
    alignSelf: "center",
    width: 200,
    flex: 1,
    gap: 4,
    alignItems: "center",
  },
  primaryBtnText: { fontSize: 20, color: "#f2f2f2" },
  primaryBtn: {
    borderWidth: 2,
    borderRadius: 6,
    padding: 5,
    backgroundColor: "#0001FF",
  },
  secondaryBtn: {
    borderWidth: 2,
    borderRadius: 6,
    padding: 5,
    backgroundColor: "orange",
  },
  secondaryBtnText: {
    fontSize: 20,
    color: "#f2f2f3",
  },
  heading: {
    fontSize: 20,
  },
  passwordText: {
    fontSize: 20,
    flex: 1,
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-end",
  },
  card: {},
  cardElevated: {},
  subTitle: {},
  description: {},
});

const PassWord = () => {
  const [password, setPassword] = useState("");
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [lowercase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [uppercase, setUpperCase] = useState(false);

  const createPassword = (characters: string, passwordLen: number): string => {
    let result = "";
    for (let i = 0; i < passwordLen; i++) {
      const characterInd = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterInd);
    }
    return result;
  };

  const generatePasswordString = (passwordLen: number) => {
    let charactersList = "";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChar = "~!@#$%^&*()_+";
    const numberChar = "1234567890";

    if (lowercase) {
      charactersList += lowerCase;
    }
    if (uppercase) {
      charactersList += upperCase;
    }
    if (symbols) {
      charactersList += symbolChar;
    }
    if (numbers) {
      charactersList += numberChar;
    }

    const passwordString = createPassword(charactersList, passwordLen);
    setIsPasswordGenerated(true);
  };

  const resetPassword = () => {
    setIsPasswordGenerated(false);
    setLowerCase(false);
    setNumbers(false);
    setUpperCase(false);
    setSymbols(false);
    setPassword("");
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator </Text>
          <Formik
            initialValues={{ passwordLen: "" }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              console.log("gery");
            }}
          >
            {({
              values,
              isSubmitting,
              handleChange,
              handleReset,
              isValid,
              errors,
              touched,
            }) => {
              return (
                <>
                  <View style={styles.inputWrapper}>
                    <View style={styles.inputColumn}>
                      <Text style={styles.heading}>Passowrd Length</Text>
                      {touched.passwordLen && errors.passwordLen && (
                        <Text style={{ color: "red" }}>
                          {errors.passwordLen}
                        </Text>
                      )}
                    </View>
                    <TextInput
                      placeholder="Exz. 8"
                      keyboardType="numeric"
                      style={styles.inputStyle}
                      value={values.passwordLen}
                      onChangeText={() => handleChange("passwordLen")}
                    />
                  </View>
                  <View style={styles.inputWrapper}></View>
                </>
              );
            }}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PassWord;
