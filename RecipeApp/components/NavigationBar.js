
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>Recipes</Text>
      <Text style={styles.text}>Favorites</Text>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'darkgreen',
    height: 50,
    width: '100%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default NavigationBar;
