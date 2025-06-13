import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  // searchApi is a function that we can call to search for results
  // results is an array of results returned from the searchApi

  const filterResultsByPrice = (price) => {
    //price === '$' || price === '$$' || price === '$$$' || price === '$$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    // <View style={{ flex: 1 }}>
    // Using Fragment <></> to avoid unnecessary View wrapper
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="The Luxury"
          navigation={navigation}
        />
      </ScrollView>
    </>
    // </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
