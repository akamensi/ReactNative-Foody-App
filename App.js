import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
// import SearchBar from "./src/components/SearchBar";

// Correct v6+ initialization
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          title: "Search" // Applies to all screens
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
        {/* <Stack.Screen name="Bar" component={SearchBar} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
