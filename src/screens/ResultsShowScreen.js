import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ResultsShowScreen = ({ route }) => {
  const { id } = route.params || {}; // Safely destructure `id` (fallback to empty object)
  console.log(`ResultsShowScreen id: ${id}`);
  return (
    <View>
      <Text>ResultsShowScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
