import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { CardComponentI } from "./types";
import { StyleSheet, View } from "react-native";

const CardComponent = ({
  title,
  content,
  index,
  removeCard,
}: CardComponentI) => {
  return (
    <View style={styles.cardContainer}>
      <Card>
        <Card.Content>
          <Text variant="titleLarge">{title}</Text>
          <Text variant="bodyMedium">{content}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => removeCard(index)}>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10
  },
});

export default CardComponent;
