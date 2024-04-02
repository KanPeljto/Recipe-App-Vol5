import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Recipe = ({ recipe }) => {
    return (
      <View>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.ingredients}>Ingredients:</Text>
        <Text style={styles.ingredient}>{recipe.ingredients.join(', ')}</Text>
        <Text style={styles.instructions}>Instructions:</Text>
        <Text style={styles.instruction}>{recipe.instructions.join('\n')}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    ingredients: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
    },
    ingredient: {
      fontSize: 16,
      marginBottom: 5,
    },
    instructions: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
    },
    instruction: {
      fontSize: 16,
      marginBottom: 5,
    },
  });

  export default Recipe;