import React from 'react';
import { Text,StyleSheet,View } from 'react-native';

const ListItem = (props) => {
  return (
    <View style={styles.item}>
        <Text style={styles.title}>{props.index}-{props.data.taskName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default ListItem;