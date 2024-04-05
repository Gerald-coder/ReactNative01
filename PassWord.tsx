import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
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

  const [lowerCase, setLowerCase] = useState(false);
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
      //   marginHorizontal: 18,
      //   marginVertical: 40,
      //   borderWidth: 1,
      //   borderColor: "red",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      //   width: "auto",
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
      //   width: "100%",
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
    Txt: {
      fontSize: 21,
      borderWidth: 2,
      borderRadius: 6,
      padding: 4,
    },
    heading: {
      fontSize: 20,
    },
  });

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLen: "" }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              generatePasswordString(+values.passwordLen); ///TODO
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
              handleReset,
              isValid,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLen && errors.passwordLen && (
                      <Text>{errors.passwordLen} </Text>
                    )}
                  </View>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.inputStyle}
                    value={values.passwordLen}
                    onChangeText={handleChange("passwordLen")}
                    placeholder="Ex. ********"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text>Include lowercase</Text>
                  <BouncyCheckbox
                    fillColor="#29AB87"
                    disableBuiltInState
                    onPress={() => setLowerCase(!lowerCase)}
                    isChecked={lowerCase}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text>Include uppercase</Text>
                  <BouncyCheckbox
                    fillColor="#C9A0DC"
                    disableBuiltInState
                    onPress={() => setUpperCase(!upperCase)}
                    isChecked={upperCase}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text>Include uppercase</Text>
                  <BouncyCheckbox
                    fillColor="#FC80A5"
                    disableBuiltInState
                    onPress={() => setNumbers(!numbers)}
                    isChecked={numbers}
                  />
                </View>
                <View style={styles.inputWrapper}></View>
                <View style={styles.inputWrapper}></View>

                <View style={styles.formAction}>
                  <TouchableOpacity>
                    <Text style={styles.Txt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.Txt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PassWord;
