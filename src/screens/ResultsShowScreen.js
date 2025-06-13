import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const { id } = route.params || {}; // Safely destructure `id` (fallback to empty object)
  const [results, setResults] = useState(null);

  const getResultById = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    if (id) {
      getResultById(id);
    }
  }, []);

  console.log("ResultsShowScreen", results);
  return (
    <View>
      <Text>ResultsShowScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
