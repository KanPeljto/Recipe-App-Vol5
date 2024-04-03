import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

interface Recipe {
  image: any;
  title: string;
  calories: number;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <View style={styles.recipeCardContainer}>
      <Image source={recipe.image} style={styles.recipeImage} />
      <View style={[styles.recipeInfoContainer, { flex: 1 }]}>
        <Text style={styles.recipeTitle}>{recipe.title}</Text>
        <Text style={styles.recipeCalories}>{recipe.calories} calories</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeCardContainer: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  recipeInfoContainer: {
    padding: 10,
  },
  recipeTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  recipeCalories: {
    fontSize: 14,
    color: '#666',
  },
});

export default RecipeCard;
