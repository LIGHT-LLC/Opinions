// StatementScreen.js
import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

const StatementScreen = () => {
  const data = [
    { title: "Statement 1" },
    { title: "Statement 2" },
    { title: "Statement 3" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Statement Screen</Text>
      <Button title="Add a Statement" onPress={() => {}} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    backgroundColor: "#eee",
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default StatementScreen;
