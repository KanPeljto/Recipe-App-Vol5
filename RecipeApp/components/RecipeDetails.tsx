import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { recipes } from '../data/recipes';  

type RootStackParamList = {
  RecipeDetails: { recipeId: number };
};

type RecipeDetailsRouteProp = RouteProp<RootStackParamList, 'RecipeDetails'>;


const RecipeDetails = () => {
  const route = useRoute<RecipeDetailsRouteProp>();
  const {recipeId}=route.params;
  const recipe = recipes.find(r => r.id === recipeId);  
  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recipe not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={recipe.image} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.authorTitle}>By {recipe.author}</Text>
      <Text style={styles.ingredientsTitle}>Ingredients needed:</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>{index + 1}. {ingredient}</Text>
      ))}
      <Text style={styles.stepsTitle}>Steps:</Text>
      {recipe.steps.map((step, index) => (
        <Text key={index} style={styles.step}>{index + 1}. {step}</Text>
      ))}
      <Text style={styles.favText}>Like this recipe? Add it to your favorites!</Text>
      <TouchableOpacity>
        <View style={styles.favoriteBox}>
          <FontAwesome5 name="star" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  authorTitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingBottom: 10,
    fontStyle: 'italic',
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredient: {
    marginBottom: 5,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  step: {
    marginBottom: 10,
  },
  favoriteBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
    alignSelf: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default RecipeDetails;
