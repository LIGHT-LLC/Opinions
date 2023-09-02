import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { StatementProvider } from "./src/context/StatementContext";
import StatementScreen from "./src/screens/SatementScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Statement: StatementScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "OPINIONS",
    },
  }
);

const App = () => {
  return (
    <StatementProvider>
      <App />
    </StatementProvider>
  );
};

export default App;
