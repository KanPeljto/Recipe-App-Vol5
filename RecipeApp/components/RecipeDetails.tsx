import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

interface Recipe {
  title: string;
  steps: string[];
}

interface RecipeDetailsProps {
  recipe: Recipe;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Steps to Make {recipe.title}</Text>
      <View style={styles.stepsContainer}>
        {recipe.steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <Text style={styles.stepNumber}>{index + 1}.</Text>
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stepsContainer: {
    marginLeft: 10,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  stepNumber: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  stepText: {
    flex: 1,
  },
});

export default RecipeDetails;
