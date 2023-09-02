import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function App() {
  const [likeStatus, setLikeStatus] = useState(null);
  const [points, setPoints] = useState(0);

  const handleReaction = (newStatus) => {
    if (likeStatus === newStatus) {
      setLikeStatus(null);
      setPoints(points - 1);
    } else {
      setLikeStatus(newStatus);
      setPoints(points + 1);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Points: {points}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Like"
          onPress={() => handleReaction("like")}
          color={likeStatus === "like" ? "green" : "gray"}
        />
        <Button
          title="Dislike"
          onPress={() => handleReaction("dislike")}
          color={likeStatus === "dislike" ? "red" : "gray"}
        />
        <Button
          title="Neutral"
          onPress={() => {
            setLikeStatus(null);
          }}
          color={likeStatus === null ? "gray" : "blue"}
        />
      </View>
    </View>
  );
}
