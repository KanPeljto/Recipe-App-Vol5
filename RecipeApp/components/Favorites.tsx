import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { favoriteRecipes } from '../data/favoriteRecipes'; 
import NavigationBar from './NavigationBar';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
    <NavigationBar/>
    <Text style={styles.favText}>Your favorites:</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {favoriteRecipes.map(recipe => (
          <View key={recipe.id} style={styles.recipeContainer}>
            <Image source={recipe.image} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  scrollView: {
    alignItems: 'center',
  },
  recipeContainer: {
    marginVertical: 10,
   
  },
  recipeImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  recipeTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  favText:{
    fontSize:15,
    fontWeight:"bold",
    marginTop:"5%",
    marginLeft:"5%"
  }
});

export default Favorites;
