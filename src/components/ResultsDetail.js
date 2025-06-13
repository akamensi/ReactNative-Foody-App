import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsDetail;
