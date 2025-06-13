import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
//import { withNavigation } from "react-navigation";
import { useNavigation } from "@react-navigation/native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}> {title} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Show")}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
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
  },
  containerStyle: {
    marginBottom: 10
  }
});

export default ResultsList;
