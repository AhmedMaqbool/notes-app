import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { View } from "react-native";
import CardComponent from "../components/Card";
import { CardI, useCardStore } from "../zustand/store";

const Home = () => {
  const cards = useCardStore<CardI[]>((state) => state.cards)
  const addCard = useCardStore((state) => state.addCard)
  return (
    <>
    <View>
      {
        cards.map((card: any,index: number) => (
          <CardComponent key={index} title="title" content='content' />
        ))
      }
    </View>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => addCard({title: "title", content: "content"})}
        mode="elevated"
      />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#f4511e",
  },
});

export default Home;
