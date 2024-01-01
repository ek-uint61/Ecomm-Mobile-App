import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./login.style";
import { Button, BackBtn, TxtInput } from "../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import axios from "axios";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Parolo 8 Karakterden Uzun Olmalıdır")
    .required("Required"),
  email: Yup.string().email("E-posta boş olamaz").required("Required"),
  location: Yup.string().min(3, "Adres boş olamaz").required("Required"),
  username: Yup.string()
    .min(3, "Kullanıcı adı boş olamaz")
    .required("Required"),
});

const SignUp = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [obsecureText, setObsecureText] = useState(false);

  const inValidForm = () => {
    Alert.alert("Geçersiz Form", "Lütfen, Boş Alanları Doldurunuz", [
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

  const registerUser = async (values) => {
    setLoader(true);
    try {
      const endpoint = "http://10.0.2.2:3000/api/register";
      const data = values;

      const response = await axios.post(endpoint, data);

      if (response.status === 201) {
        navigation.replace("Login");
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
            source={require("../assets/images/kepce.png")}
            style={{
              height: SIZES.height / 3,
              width: SIZES.width - 60,
              resizeMode: "contain",
              marginBottom: SIZES.xxLarge,
            }}
          />

          <Text style={styles.title}>Hidrolik ve Pnömatik Makineler</Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
              location: "",
              username: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => registerUser(values)}>
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
                  <Text style={styles.label}>Kullanıcı Adı</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.secondary : COLORS.offwhite
                    )}>
                    <MaterialCommunityIcons
                      name="face-man-profile"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />

                    <TextInput
                      placeholder="Kullanıcı Adını Girin"
                      onFocus={() => {
                        setFieldTouched("username");
                      }}
                      onBlur={() => {
                        setFieldTouched("username", "");
                      }}
                      value={values.username}
                      onChangeText={handleChange("username")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.username && errors.username && (
                    <Text style={styles.errorMessage}>{errors.username}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>E-posta</Text>
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
                      placeholder="E-postayı Girin"
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
                  <Text style={styles.label}>Adres</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.location ? COLORS.secondary : COLORS.offwhite
                    )}>
                    <Ionicons
                      name="location-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />

                    <TextInput
                      placeholder="Adresi Girin"
                      onFocus={() => {
                        setFieldTouched("location");
                      }}
                      onBlur={() => {
                        setFieldTouched("location", "");
                      }}
                      value={values.location}
                      onChangeText={handleChange("location")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.location && errors.location && (
                    <Text style={styles.errorMessage}>{errors.location}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Parola</Text>
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
                      placeholder="Parolayı Girin"
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
                  title={"K A Y I T  O L"}
                  onPress={isValid ? handleSubmit : inValidForm}
                  loader={loader}
                  isValid={isValid}
                />
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
