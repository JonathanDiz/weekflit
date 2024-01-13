import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://pluto.tv/ce84f691-66af-4c06-a402-ad37294b608f' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default VideoPlayer;
