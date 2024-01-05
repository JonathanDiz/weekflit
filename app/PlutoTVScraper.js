import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator, useWindowDimensions } from "react-native";
import axios from "axios";
import RenderHTML from "react-native-render-html";
import ErrorBoundary from "./ErrorBoundary";

const SerieItem = ({ item }) => (
  <View style={styles.serieItem}>
    <Image source={{ uri: item.poster }} style={styles.poster} />
    <Text style={styles.titulo}>{item.titulo}</Text>
  </View>
);

const PlutoTVScraper = () => {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const windowDimensions = useWindowDimensions();  

  useEffect(() => {
    scrape();
  }, []);

  const scrape = async () => {
    try {
      const response = await axios.get("https://pluto.tv/en/live-tv/62f54c11b3af68000702c304");
      const html = response.data;

      setSeries([{ descripcion: html }]);

    } catch (error) {
      console.error("Error en la obtención de datos:", error);

      if (error.name === "RenderHTMLFetchError") {
        setError(`Error al obtener datos: ${error.message}`);
      } else {
        setError(`Error inesperado: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.tituloPrincipal}>CSI: Miami</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
      ) : (
        <>
          {error ? (
            <ErrorBoundary error={error} onRetry={scrape} />
          ) : (
            <FlatList
              data={series}
              renderItem={({ item }) => (
                <View>
                  <SerieItem item={item} />
                  <RenderHTML ignoredDomTags={['noscript']}  contentWidth={windowDimensions.width} source={{ html: item.descripcion }} />
                </View>
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
  },
  tituloPrincipal: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  serieItem: {
    marginBottom: 20,
  },
  poster: {
    width: 100,
    height: 150,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  loading: {
    marginTop: 20,
  },
});

export default PlutoTVScraper;
