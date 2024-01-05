import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PlutoTVScraper from './app/PlutoTVScraper';

export default function App() {
  return (
    <View style={styles.container}>
        <PlutoTVScraper />
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
