import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NavigationBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>Recipes</Text>
      <Text style={styles.text}>Favorites</Text>
      <Text style={styles.text}>Profile</Text>
      <Text style={styles.text}>Register</Text>
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
    marginTop:30
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginEnd:"5%",
    marginLeft:"5%"
  },
});

export default NavigationBar;
