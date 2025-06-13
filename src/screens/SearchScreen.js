import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
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
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
      <ResultsList results={filterResultsByPrice("$$$$")} title="The Luxury" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
