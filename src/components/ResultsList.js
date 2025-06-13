import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}> {title} </Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(resutl) => resutl.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
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
