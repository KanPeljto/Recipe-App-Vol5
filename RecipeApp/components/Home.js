import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to RecipeApp!</Text>
      <Image source={require('../assets/background.jpeg')} style={styles.backgroundImage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
    position: 'absolute',
    zIndex: 0, 
  },
});

export default Home;
