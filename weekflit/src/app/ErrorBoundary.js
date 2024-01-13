import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ErrorBoundary = ({ error, onRetry }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{error}</Text>
    {onRetry && <Text style={styles.retryText} onPress={onRetry}>Reintentar</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 18,
    marginBottom: 10,
  },
  retryText: {
    color: "blue",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default ErrorBoundary;
