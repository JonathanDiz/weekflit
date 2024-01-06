import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import * as Permissions from 'expo-modules-core/Permissions/Permissions';

async function requestVideoPermissions() {
  const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL, Permissions.AUDIO_RECORDING);
  if (status !== 'granted') {
    console.error('Camera roll and audio recording permissions are required for video playback.');
  }
}

await requestVideoPermissions();

const VideoPlayer = ({ videoSource }) => {
  const [status, setStatus] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await Video.requestPermissionsAsync();
      setStatus(status);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Video 
        source={{ uri: videoSource }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={styles.video}
      />
      <View>
        <Text>Status: {status?.status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
});

export default VideoPlayer;
