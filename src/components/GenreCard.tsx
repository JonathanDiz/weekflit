import React, { FC } from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, StyleProp, ViewStyle } from "react-native";
import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";

interface GenreCardProps {
  genreName: string;
  active: boolean;
  onPress: (genreName: string) => void;
}

const { width } = Dimensions.get("screen");

const setWidth = (w: number): number => (width / 100) * w;

const GenreCard: FC<GenreCardProps> = ({ genreName, active, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: active ? COLORS.ACTIVE : COLORS.WHITE,
      }}
      activeOpacity={0.5}
      onPress={() => onPress(genreName)}
    >
      <Text
        style={{
          ...styles.genreText,
          color: active ? COLORS.WHITE : COLORS.BLACK,
        }}
      >
        {genreName}
      </Text>
    </TouchableOpacity>
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
    width: setWidth(25),
  },
  genreText: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    fontFamily: FONTS.BOLD,
  },
});

export default GenreCard;
