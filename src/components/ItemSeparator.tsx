import React, { FC } from "react";
import { View, ViewStyle } from "react-native";

interface ItemSeparatorProps {
  height?: number;
  width?: number;
}

const ItemSeparator: FC<ItemSeparatorProps> = ({ height = 0, width = 0 }) => {
  return <View style={{ width, height }} />;
};

export default ItemSeparator;
