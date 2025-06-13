import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ResultsList = ({ title, resutls }) => {
  return (
    <View>
      <Text style={styles.titleStyle}> {title} </Text>
      <FlatList
        horizontal
        data={resutls}
        keyExtractor={(resutl) => resutl.id}
        renderItem={({ item }) => {
          return <Text> {item.name} </Text>;
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
