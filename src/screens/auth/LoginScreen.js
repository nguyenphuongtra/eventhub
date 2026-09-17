import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* Logo */}
        <Image
          source={require("../../../assets/images/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Sign in
        </Text>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={20}
            color="#777"
          />

          <TextInput
            style={styles.input}
            placeholder="abc@email.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#777"
          />

          <TextInput
            style={styles.input}
            placeholder="Your password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Ionicons
            name="eye-off-outline"
            size={20}
            color="#999"
          />
        </View>

        {/* Remember + Forgot */}
        <View style={styles.optionRow}>

          <TouchableOpacity
            style={styles.rememberRow}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View
              style={[
                styles.checkbox,
                rememberMe && styles.checkboxActive,
              ]}
            >
              {rememberMe && (
                <Ionicons
                  name="checkmark"
                  size={14}
                  color="#FFFFFF"
                />
              )}
            </View>

            <Text style={styles.rememberText}>
              Remember Me
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
            <Text style={styles.forgot}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

        </View>

        {/* Sign In */}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            console.log("Email:", email);
            console.log("Password:", password);
          }}
        >
          <Text style={styles.signInText}>
            SIGN IN
          </Text>

          <Ionicons
            name="arrow-forward"
            size={20}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        {/* OR */}
        <Text style={styles.or}>
          OR
        </Text>

        {/* Google */}
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.google}>
            G
          </Text>

          <Text style={styles.socialText}>
            Login with Google
          </Text>
        </TouchableOpacity>

        {/* Facebook */}
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.facebook}>
            f
          </Text>

          <Text style={styles.socialText}>
            Login with Facebook
          </Text>
        </TouchableOpacity>

        {/* Sign up */}
        <View style={styles.signupRow}>
          <Text style={styles.signupText}>
            Don't have an account?
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.signupLink}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 30,
  },

  logo: {
    width: 120,
    height: 80,
    alignSelf: "center",
    marginBottom: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#222",
    marginBottom: 25,
  },

  inputContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: "#222",
  },

  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  checkboxActive: {
    backgroundColor: "#5868F2",
    borderColor: "#5868F2",
  },

  rememberText: {
    fontSize: 12,
    color: "#444",
  },

  forgot: {
    fontSize: 12,
    color: "#444",
  },

  signInButton: {
    height: 55,
    borderRadius: 12,
    backgroundColor: "#5868F2",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },

  signInText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },

  or: {
    textAlign: "center",
    color: "#999",
    marginVertical: 20,
  },

  socialButton: {
    height: 52,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    position: "relative",
  },

  google: {
    position: "absolute",
    left: 25,
    fontSize: 20,
    fontWeight: "700",
  },

  facebook: {
    position: "absolute",
    left: 25,
    fontSize: 22,
    fontWeight: "700",
  },

  socialText: {
    fontSize: 13,
    color: "#333",
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  signupText: {
    color: "#444",
    fontSize: 12,
  },

  signupLink: {
    color: "#5868F2",
    fontSize: 12,
    marginLeft: 4,
    fontWeight: "600",
  },
});