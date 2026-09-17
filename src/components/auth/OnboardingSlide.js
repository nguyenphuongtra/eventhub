import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function OnboardingSlide({
  image,
  title,
  description,
  currentIndex,
  onNext,
  onSkip,
}) {
  return (
    <View style={styles.container}>

      {/* Hình minh họa */}
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Bottom blue panel */}
      <View style={styles.bottomPanel}>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>

        {/* Bottom navigation */}
        <View style={styles.bottomRow}>

          <TouchableOpacity onPress={onSkip}>
            <Text style={styles.skip}>
              Skip
            </Text>
          </TouchableOpacity>

          {/* Dots */}
          <View style={styles.dots}>
            {[0, 1, 2].map((index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentIndex === index && styles.activeDot,
                ]}
              />
            ))}
          </View>

          <TouchableOpacity onPress={onNext}>
            <Text style={styles.next}>
              Next
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },

  image: {
    width: width * 0.8,
    height: height * 0.48,
  },

  bottomPanel: {
    backgroundColor: "#5868F2",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 30,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 28,
  },

  description: {
    color: "#E5E7FF",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 15,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
  },

  skip: {
    color: "#D7DAFF",
    fontSize: 14,
  },

  next: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  dots: {
    flexDirection: "row",
    gap: 5,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#8D97F8",
  },

  activeDot: {
    backgroundColor: "#FFFFFF",
    width: 7,
    height: 7,
    borderRadius: 4,
  },
});