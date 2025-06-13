import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ResultsList = ({ title, resutls }) => {
  return (
    <View>
      <Text style={styles.titleStyle}> {title} </Text>
      <Text>Results: {resutls.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  }
});

export default ResultsList;
