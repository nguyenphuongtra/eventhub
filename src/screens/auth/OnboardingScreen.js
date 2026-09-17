import React, { useState } from "react";

import OnboardingSlide from "../../components/auth/OnboardingSlide";

const onboardingData = [
  {
    image: require("../../../assets/images/onboarding-1.png"),
    title: "Explore Upcoming and\nNearby Events",
    description:
      "In publishing and graphic design, Lorem is a placeholder text commonly used.",
  },

  {
    image: require("../../../assets/images/onboarding-2.png"),
    title: "Web Have Modern Events\nCalendar Feature",
    description:
      "In publishing and graphic design, Lorem is a placeholder text commonly used.",
  },

  {
    image: require("../../../assets/images/onboarding-3.png"),
    title: "To Look Up More Events or\nActivities Nearby By Map",
    description:
      "In publishing and graphic design, Lorem is a placeholder text commonly used.",
  },
];

export default function OnboardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = onboardingData[currentIndex];

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace("Login");
    }
  };

  const handleSkip = () => {
    navigation.replace("Login");
  };

  return (
    <OnboardingSlide
      image={currentSlide.image}
      title={currentSlide.title}
      description={currentSlide.description}
      currentIndex={currentIndex}
      onNext={handleNext}
      onSkip={handleSkip}
    />
  );
}