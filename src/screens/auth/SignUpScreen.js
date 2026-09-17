import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function SignUpScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    // Kiểm tra dữ liệu đơn giản
    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Frontend-only:
    // chuyển sang màn hình Verification
    navigation.navigate("Verification", {
      email: email,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color="#17172F"
          />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>
          Sign up
        </Text>

        {/* Full name */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="person-outline"
            size={22}
            color="#888"
          />

          <TextInput
            style={styles.input}
            placeholder="Full name"
            placeholderTextColor="#8A8A9A"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={22}
            color="#888"
          />

          <TextInput
            style={styles.input}
            placeholder="abc@email.com"
            placeholderTextColor="#8A8A9A"
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
            size={22}
            color="#888"
          />

          <TextInput
            style={styles.input}
            placeholder="Your password"
            placeholderTextColor="#8A8A9A"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={
                showPassword
                  ? "eye-outline"
                  : "eye-off-outline"
              }
              size={21}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm password */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={22}
            color="#888"
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#8A8A9A"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />

          <TouchableOpacity
            onPress={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          >
            <Ionicons
              name={
                showConfirmPassword
                  ? "eye-outline"
                  : "eye-off-outline"
              }
              size={21}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        {/* Sign up button */}
        <TouchableOpacity
          style={styles.mainButton}
          onPress={handleSignUp}
        >
          <Text style={styles.mainButtonText}>
            SIGN UP
          </Text>

          <View style={styles.arrowCircle}>
            <Ionicons
              name="arrow-forward"
              size={18}
              color="#FFFFFF"
            />
          </View>
        </TouchableOpacity>

        {/* OR */}
        <Text style={styles.orText}>
          OR
        </Text>

        {/* Google */}
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.googleText}>
            G
          </Text>

          <Text style={styles.socialText}>
            Login with Google
          </Text>
        </TouchableOpacity>

        {/* Facebook */}
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.facebookText}>
            f
          </Text>

          <Text style={styles.socialText}>
            Login with Facebook
          </Text>
        </TouchableOpacity>

        {/* Sign in */}
        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>
            Already have an account?
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.linkText}>
              Signin
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
    paddingTop: 55,
    paddingBottom: 35,
  },

  backButton: {
    marginBottom: 30,
  },

  title: {
    fontSize: 27,
    fontWeight: "600",
    color: "#17172F",
    marginBottom: 28,
  },

  inputContainer: {
    height: 62,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
    marginBottom: 18,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: "#17172F",
  },

  mainButton: {
    height: 64,
    borderRadius: 14,
    backgroundColor: "#5868F2",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
    position: "relative",
  },

  mainButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },

  arrowCircle: {
    position: "absolute",
    right: 14,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#4354E8",
    justifyContent: "center",
    alignItems: "center",
  },

  orText: {
    textAlign: "center",
    color: "#999",
    marginVertical: 22,
    fontSize: 14,
  },

  socialButton: {
    height: 58,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    position: "relative",
  },

  googleText: {
    position: "absolute",
    left: 26,
    fontSize: 22,
    fontWeight: "700",
  },

  facebookText: {
    position: "absolute",
    left: 27,
    fontSize: 25,
    fontWeight: "700",
  },

  socialText: {
    fontSize: 14,
    color: "#222",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 23,
  },

  bottomText: {
    color: "#222",
    fontSize: 13,
  },

  linkText: {
    color: "#5868F2",
    fontSize: 13,
    marginLeft: 4,
  },
});