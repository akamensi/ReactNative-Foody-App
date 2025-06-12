import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={searchTerm}
        onChangeText={onSearchTermChange} // or we can also write like this: (newSearchTerm) => onSearchTermChange(newSearchTerm)
        onSubmitEditing={onSearchTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "lightgrey",
    height: 50,
    borderRadius: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;
