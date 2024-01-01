import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./login.style";
import { Button, BackBtn, TxtInput } from "../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Parola 8 Karakterden Uzun Olamaz.")
    .required("Zorunlu"),
  email: Yup.string()
    .email("Geçerli Mail Adresi Giriniz '@' kullanın")
    // eposta geçerli değilse hata mesaji dondur
    .required("Zorunlu"),
});

const LoginPage = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  const inValidForm = () => {
    Alert.alert("Geçersiz Form", "Lütfen Boş Alanları Doldurunuz", [
      {
        text: "Iptal",
        onPress: () => {},
      },
      {
        text: "Devam et",
        onPress: () => {},
      },
      { defaultIndex: 1 },
    ]);
  };
  const login = async (values) => {
    setLoader(true);
    try {
      const endpoint = "http://10.0.2.2:3000/api/login";
      const data = values;

      const response = await axios.post(endpoint, data);

      if (response.status === 200) {
        setResponseData(response.data);
        console.log(`user${responseData._id}`);

        await AsyncStorage.setItem("id", JSON.stringify(responseData._id));
        await AsyncStorage.setItem("token", JSON.stringify(responseData.token));
        await AsyncStorage.setItem(
          `user${responseData._id}`,
          JSON.stringify(responseData)
        );
        setLoader(false);

        navigation.replace("Bottom Navigation");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require("../assets/images/bk.png")}
            style={styles.cover}
          />

          <Text style={styles.title}>Hidrolik ve Pnömatik Makineler</Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => login(values)}>
            {({
              handleChange,
              handleBlur,
              touched,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
            }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.secondary : COLORS.offwhite
                    )}>
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />

                    <TextInput
                      placeholder="E-postayı Giriniz"
                      onFocus={() => {
                        setFieldTouched("email");
                      }}
                      onBlur={() => {
                        setFieldTouched("email", "");
                      }}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.password ? COLORS.secondary : COLORS.offwhite
                    )}>
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />

                    <TextInput
                      secureTextEntry={obsecureText}
                      placeholder="Şifre"
                      onFocus={() => {
                        setFieldTouched("password");
                      }}
                      onBlur={() => {
                        setFieldTouched("password", "");
                      }}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        setObsecureText(!obsecureText);
                      }}>
                      <MaterialCommunityIcons
                        name={obsecureText ? "eye-outline" : "eye-off-outline"}
                        size={18}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>

                <Button
                  loader={loader}
                  title={"G I R I S"}
                  onPress={isValid ? handleSubmit : inValidForm}
                  isValid={isValid}
                />

                <Text
                  style={styles.registration}
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}>
                  {" "}
                  Kayıt Ol{" "}
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginPage;
// const login = async (values) => {
//   setLoader(true);
//   console.log(values);
//   try {
//     const endpoint = "http://localhost:3000/api/login";
//     const data = JSON.stringify(values); // Convert values to JSON

//     const response = await fetch(endpoint, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: data,
//     });

//     console.log(endpoint);

//     if (response.status === 200) {
//       const responseData = await response.json(); // Parse response JSON

//       setResponseData(responseData);

//       await AsyncStorage.setItem("id", JSON.stringify(responseData._id));
//       await AsyncStorage.setItem("token", JSON.stringify(responseData.token));
//       await AsyncStorage.setItem(`user${responseData._id}`, JSON.stringify(responseData));
//       setLoader(false);

//       navigation.replace('Bottom Navigation');
//     } else {
//       Alert.alert("Error Logging in", "Please provide valid credentials", [
//         {
//           text: "Cancel",
//           onPress: () => {},
//         },
//         {
//           text: "Continue",
//           onPress: () => {},
//         },
//         { defaultIndex: 1 },
//       ]);
//     }
//   } catch (error) {
//     Alert.alert(
//       "Error",
//       "Oops, Error logging in. Try again with correct credentials",
//       [
//         {
//           text: "Cancel",
//           onPress: () => {},
//         },
//         {
//           text: "Continue",
//           onPress: () => {},
//         },
//         { defaultIndex: 1 },
//       ]
//     );
//   } finally {
//     setLoader(false);
//   }
// };
