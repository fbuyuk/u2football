import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { Formik } from "formik";
import validationSchema from "./validations.js";

const LoginScreen = ({ navigation }) => {
  const { login, register } = useAuth();
  const [type, setType] = useState(1);

  const showDialog = () => alert("Tüm alanları doldurunuz");

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: "white",
          textDecorationLine: "underline",
        }}
      >
        Giriş/Kayıt
      </Text>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validationSchema}
        validateOnMount={true}
        onSubmit={async (values, bag) => {
          try {
            const { username, password } = values;
            if (type == 1) {
              await login(username, password);
            } else {
              await register(username, password);
            }
          } catch (err) {
            bag.setErrors({ general: err.toString() });
            showDialog();
          }
        }}
      >
        {({
          handleChange,
          handleSubmit,
          setFieldValue,
          errors,
          isValid,
          isSubmitting,
        }) => (
          <View style={styles.form}>
            <Text style={{ color: "white" }}>Kullanıcı Adı</Text>
            <TextInput
              mode="outlined"
              onChangeText={handleChange("username")}
              theme={{
                roundness: 30,
              }}
              placeholder="Kullanıcı Adı"
              outlineColor="#C9C9C9"
              activeOutlineColor={"blue"}
              style={{
                color: "black",
                marginBottom: 10,
                backgroundColor: "white",
                paddingHorizontal: 10,
              }}
            />
            <Text style={{ color: "white" }}>Şifre</Text>
            <TextInput
              onChangeText={handleChange("password")}
              placeholder="Şifre"
              style={{
                marginBottom: 10,
                backgroundColor: "white",
                paddingHorizontal: 10,
              }}
            />
            <View style={{ marginVertical: 10 }}>
              <Button
                onPress={() => {
                  if (!isValid) {
                    showDialog();
                  } else {
                    setType(1);
                    handleSubmit();
                  }
                }}
                title="Giriş"
                color="#003740"
              />
            </View>

            <View>
              <Button
                onPress={() => {
                  if (!isValid) {
                    showDialog();
                  } else {
                    setType(2);
                    handleSubmit();
                  }
                }}
                title="Üye ol"
                color="#003740"
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    backgroundColor: "#28616b",
  },
  innerBox: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "100%",
    padding: 16,
    borderRadius: 40,
  },
  form: {
    paddingVertical: 20,
    width: "100%",
  },
});

export default LoginScreen;
