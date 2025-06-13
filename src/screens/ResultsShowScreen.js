import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const { id } = route.params || {}; // Safely destructure `id` (fallback to empty object)
  const [result, setResult] = useState(null);

  const getResultById = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    if (id) {
      getResultById(id);
    }
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 200
  }
});

export default ResultsShowScreen;
