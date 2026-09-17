import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function ResetPasswordScreen({
  navigation,
}) {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    console.log("Reset password email:", email);

    // Frontend-only
    alert("Verification code sent");

    navigation.navigate("Verification", {
      email: email,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.content}>

        {/* Back */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color="#17172F"
          />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>
          Reset Password
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Please enter your email address to
          {"\n"}
          request a password reset
        </Text>

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

        {/* Send */}
        <TouchableOpacity
          style={styles.mainButton}
          onPress={handleSend}
        >
          <Text style={styles.mainButtonText}>
            SEND
          </Text>

          <View style={styles.arrowCircle}>
            <Ionicons
              name="arrow-forward"
              size={18}
              color="#FFFFFF"
            />
          </View>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 55,
  },

  backButton: {
    marginBottom: 30,
  },

  title: {
    fontSize: 27,
    fontWeight: "600",
    color: "#17172F",
    marginBottom: 18,
  },

  description: {
    fontSize: 16,
    lineHeight: 26,
    color: "#17172F",
  },

  inputContainer: {
    height: 62,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
    marginTop: 35,
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
    marginTop: 45,
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
});