import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PlutoTVScraper from './app/PlutoTVScraper';
import VideoPlayer from './app/VideoPlayer';

export default function App() {
  const videoSource = 'https://pluto.tv/ce84f691-66af-4c06-a402-ad37294b608f'

  return (
    <View style={styles.container}>
        <PlutoTVScraper />
        <VideoPlayer videoSource={videoSource} />
      <StatusBar style="auto" />
    </View>
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
