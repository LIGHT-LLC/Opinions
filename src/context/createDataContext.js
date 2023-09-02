import React, { useReducer, useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SearchScreen from "../components/SearchScreen";
import { StatementContext } from "../context/StatementContext";

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");

  const statementContext = useContext(StatementContext);

  return (
    <View>
      <SearchScreen
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmitted={() => {
          statementContext.dispatch({ type: "add_statement" });
        }}
      />

      <Button
        title="Add a new statement"
        onPress={() => navigation.navigate("Statement")}
      />
      <Text>Home Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
