//Library
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Redux
import { Provider as StoreProvider } from "react-redux";

//Pages
import HomeScreen from "./src/pages/Home/Home";
import AddCoin from "./src/pages/AddCoin/AddCoin";

//Style
// import "./src/styles/themes/";
// import "@fontsource/poppins";
// import "@fontsource/poppins/500.css";
import { createStore } from "redux";
import globalReducer from "./src/redux/GlobalReducer";

const App = () => {
  const store = createStore(globalReducer);
  const HomeStack = createStackNavigator();
  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <HomeStack.Navigator>
          <HomeStack.Screen
            name="home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <HomeStack.Screen
            name="addCoin"
            component={AddCoin}
            options={{ headerTitle: "" }}
          />
        </HomeStack.Navigator>
      </StoreProvider>
    </NavigationContainer>
  );
};

export default App;
