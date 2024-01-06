import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator, useWindowDimensions, SafeAreaView } from "react-native";
import axios from "axios";
import cheerio from "react-native-cheerio";
import RenderHTML from "react-native-render-html";

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
      const response = await axios.get("https://pluto.tv/es/live-tv/63eb9255c111bc0008fe6ec4");
      const html = response.data;

      const $ = cheerio.load(html);
      const videoSrc = $("video").attr("src");
      const titulo = $("meta[property='og:title']").attr("content");
      const descripcion = $("meta[property='og:description']").attr("content");

      setSeries([{ videoSrc, titulo, descripcion }]);
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
    <SafeAreaView style={styles.safeArea}>
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
                    <RenderHTML ignoredDomTags={['noscript']} contentWidth={windowDimensions.width} source={{ html: item.videoSrc }} />
                    <Text>{item.titulo}</Text>
                    <Text>{item.descripcion}</Text>
                  </View>
                )}
                keyExtractor={(_, index) => index.toString()}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  contenedor: {
    flex: 1,
    padding: 30,
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
