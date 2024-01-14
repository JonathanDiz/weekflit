import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import COLORS from '../constants/Colors';
import FONTS from '../constants/Fonts';
import GenreCard from '../components/GenreCard';
import ItemSeparator from '../components/ItemSeparator';

const Genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"]

const HomeScreen = () => {
  const [activeGenre, setActiveGenre] = useState("All");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={COLORS.BASIC_BACKGROUND}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList
          data={Genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <GenreCard
              genreName={item}
              active={item === activeGenre ? true : false}
              onPress={setActiveGenre}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: FONTS.REGULAR,
  },
  headerSubTitle: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    fontFamily: FONTS.BOLD,
  },
  genreListContainer: {
    paddingVertical: 10
  }
});

export default HomeScreen;
