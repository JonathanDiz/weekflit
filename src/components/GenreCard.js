import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import COLORS from "../constants/Colors";

const {height, width} = Dimensions.get("screen");

const setWidth = (w) => (width/100) * w;

const GenreCard = ({genreName}) => {
  return (
    <View style={styles.container}>
      <Text>{genreName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    width: setWidth(25)
  },
});

export default GenreCard;