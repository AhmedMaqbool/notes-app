import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import CardComponent from "../components/Card";
import { CardI, useCardStore } from "../zustand/store";

const Home = () => {
  const cards = useCardStore<CardI[]>((state) => state.cards);
  const addCard = useCardStore((state) => state.addCard);
  const removeCard = useCardStore((state) => state.removeCard);

  return (
    <>
      <ScrollView>
        {cards.map((card: any, index: number) => (
          <CardComponent
            removeCard={removeCard}
            key={index}
            title="title"
            content="content"
            index={index}
          />
        ))}
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => addCard({ title: "title", content: "content" })}
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
