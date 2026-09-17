import React, { useRef, useState } from "react";

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

export default function VerificationScreen({
  navigation,
  route,
}) {
  const email = route?.params?.email || "your email";

  const [code, setCode] = useState([
    "",
    "",
    "",
    "",
  ]);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (text, index) => {
    // Chỉ lấy 1 số
    const value = text.replace(/[^0-9]/g, "");

    const newCode = [...code];
    newCode[index] = value;

    setCode(newCode);

    // Tự động chuyển sang ô kế tiếp
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyPress = (event, index) => {
    // Nhấn Backspace ở ô trống
    // thì quay về ô trước
    if (
      event.nativeEvent.key === "Backspace" &&
      !code[index] &&
      index > 0
    ) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleContinue = () => {
    const verificationCode = code.join("");

    if (verificationCode.length !== 4) {
      alert("Please enter the 4-digit verification code");
      return;
    }

    console.log(
      "Verification code:",
      verificationCode
    );

    // Frontend-only
    alert("Verification successful");

    navigation.navigate("Login");
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
          Verification
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          We’ve send you the verification
          {"\n"}
          code on {email}
        </Text>

        {/* OTP */}
        <View style={styles.otpContainer}>
          {code.map((value, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={[
                styles.otpInput,
                value !== "" && styles.otpInputActive,
              ]}
              value={value}
              onChangeText={(text) =>
                handleChange(text, index)
              }
              onKeyPress={(event) =>
                handleKeyPress(event, index)
              }
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              selectTextOnFocus
            />
          ))}
        </View>

        {/* Continue */}
        <TouchableOpacity
          style={styles.mainButton}
          onPress={handleContinue}
        >
          <Text style={styles.mainButtonText}>
            CONTINUE
          </Text>

          <View style={styles.arrowCircle}>
            <Ionicons
              name="arrow-forward"
              size={18}
              color="#FFFFFF"
            />
          </View>
        </TouchableOpacity>

        {/* Resend */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Re-send code in{" "}
          </Text>

          <TouchableOpacity>
            <Text style={styles.timerText}>
              0:20
            </Text>
          </TouchableOpacity>
        </View>

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

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    paddingHorizontal: 7,
  },

  otpInput: {
    width: 62,
    height: 62,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 14,
    fontSize: 23,
    color: "#17172F",
  },

  otpInputActive: {
    borderColor: "#5868F2",
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

  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

  resendText: {
    color: "#17172F",
    fontSize: 14,
  },

  timerText: {
    color: "#5868F2",
    fontSize: 14,
  },
});