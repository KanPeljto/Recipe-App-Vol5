import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Recipe {
  id: number;
  image: any;
  title: string;
  calories: number;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.recipeCardContainer}
      onPress={() => navigation.navigate('RecipeDetails', { recipeId: recipe.id })}
    >
      <Image source={recipe.image} style={styles.recipeImage} />
      <View style={styles.recipeInfoContainer}>
        <Text style={styles.recipeTitle}>{recipe.title}</Text>
        <Text style={styles.recipeCalories}>{recipe.calories} calories</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recipeImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  recipeInfoContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  recipeTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  recipeCalories: {
    fontSize: 14,
    color: '#666',
  },
});

export default RecipeCard;
