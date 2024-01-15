import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableNativeFeedback } from "react-native";
import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";
import IMAGES from "../constants/Images";
import { Ionicons } from "@expo/vector-icons";

const MovieCard = () => {
  const [liked, setLiked] = useState(false)

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.weekflitContainer}>
          <Image 
            source={IMAGES.WEEKFLIT} 
            resizeMode="cover" 
            style={styles.weekflitImage}  
          />
          <Text style={styles.weekflitRating}>9.4</Text>
        </View>
        <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
          <Ionicons 
            name={liked ? "heart" : "heart-outline"}
            size={17}
            color={liked ? COLORS.HEART : COLORS.WHITE}
            style={{ position: "absolute", bottom: 10, left: 10 }}
          />
        </TouchableNativeFeedback>
      </View>
      <View>
        <Text style={styles.movieTitle} numberOfLines={3}>URI - Surgical Strike</Text>
        <View style={movieSubTitleContainer}>
          <Text style={styles.movieSubTitle}>Hindi | (U/A)</Text>
          <View style={styles.rowAndCenter}>
            <Ionicons
              name="heart"
              size={24}
              color={COLORS.HEART}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.movieSubTitle}>90%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ACTIVE,
    height: 340,
    width: 230,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 2,
  },
  movieTitle: {
    fontFamily: FONTS.EXTRA_BOLD,
    color: COLORS.GRAY,
    paddingVertical: 2,
    marginTop: 5,
    width: 230,
  },
  movieSubTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  movieSubTitle: {
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  weekflitContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: COLORS.DARK_BLUISH_PURPLE,
    borderBottomEndRadius: 5,
    borderTopRightRadius: 12,
    paddingVertical: 3,
  },
  weekflitImage: {
    height: 20,
    width: 50,
    borderBottomLeftRadius: 5,
  },
  weekflitRating: {
    marginRight: 5,
    color: COLORS.HEART,
    fontFamily: FONTS.EXTRA_BOLD,
  },
});

export default MovieCard;