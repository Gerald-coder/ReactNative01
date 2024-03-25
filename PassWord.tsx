import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

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
    let characterList = "";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbersChar = "0123456789";
    const symbolsChar = "!@#$%^&*()_+";
    if (lowerCase) {
      characterList += lowercase;
    }
    if (upperCase) {
      characterList += uppercase;
    }
    if (numbers) {
      characterList += numbersChar;
    }
    if (symbols) {
      characterList += symbolsChar;
    }
    const passwordResult = createPassword(characterList, passwordLen);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
    //
  };

  const createPassword = (characters: string, passwordLen: number) => {
    let result = "";
    for (let i = 0; i < passwordLen; i++) {
      const characterInd = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterInd);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword("");
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
    setIsPasswordGenerated(false);

    //
  };

  // NEXT FORMIK

  return (
    <SafeAreaView>
      <Text>PassWord</Text>
    </SafeAreaView>
  );
};

export default PassWord;
