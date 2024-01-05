import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import axios from "axios";
import HTMLParser from "react-native-html-parser";

const PlutoTVScraper = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    scrape();
  }, []);

  const scrape = async () => {
    try {
      const response = await axios.get("https://pluto.tv/browse/shows");
      const html = response.data;

      const root = HTMLParser.parse(html);
      const seriesData = [];

      root.querySelectorAll(".show-card").forEach((element) => {
        const title = element.querySelector(".show-card__title").innerText;
        const poster = element.querySelector(".show-card__poster").getAttribute("src");
        const description = element.querySelector(".show-card__description").innerText;

        seriesData.push({
          title,
          poster,
          description,
        });
      });

      setSeries(seriesData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Series</Text>
      <FlatList
        data={series}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.poster }} style={{ width: 100, height: 150 }} />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default PlutoTVScraper;
