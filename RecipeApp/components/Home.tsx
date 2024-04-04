import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { recipes } from '../data/recipes';
import NavigationBar from './NavigationBar';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={require('../assets/background3.jpeg')} style={styles.backgroundImage}/> */}
      <View style={styles.messageContainer}>
        <Text style={styles.textMessage}>Welcome to RecipeApp!</Text>
      </View>
      <ScrollView horizontal={true} style={styles.recipeScrollView}>
  {recipes.map(recipe => (
    <View key={recipe.id} style={styles.recipeContainer}>
      <Image source={recipe.image} style={styles.recipeImage} />
      <Text style={styles.calorieText}>Only {recipe.calories} calories</Text>
    </View>
  ))}
</ScrollView>


      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>Recipe App is an application that provides you with new recipe ideas.</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.textMessage}>See More</Text>
      </View>
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
  textMessage: {
    color: 'darkorange',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageContainer: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  recipeScrollView: {
    marginBottom: 20,
  },
  recipeContainer: {
    marginRight: 10,
  },
  recipeImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  calorieText: {
    marginTop: 5,
    textAlign: 'center',
    color: 'darkgray',
  },
  aboutContainer: {
    width: '90%',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  aboutText: {
    textAlign: 'center',
    fontSize: 16,
  },
  box: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgreen',
    borderRadius: 8,
  },
});


export default Home;
