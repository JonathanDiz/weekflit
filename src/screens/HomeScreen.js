import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home screen</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
