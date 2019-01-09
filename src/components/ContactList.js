import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";

const contactList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.contacts}
      renderItem={(info) => (
        <ListItem
          contactName={info.item.name}
          contactImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default contactList;
