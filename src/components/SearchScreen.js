import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        placeholderTextColor="white"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmitted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center", // Center vertically
  },
  inputStyle: {
    color: "white",
    flex: 1,
    marginLeft: 10, // Add some margin to the left for better alignment
  },
  iconStyle: {
    fontSize: 30,
    color: "white",
    marginLeft: 15,
  },
});

export default SearchBar;
