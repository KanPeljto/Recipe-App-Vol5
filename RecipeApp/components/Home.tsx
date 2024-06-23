import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchRandomRecipes } from '../services/apiService';
import { Card } from '@rneui/base';
const Home: React.FC = () => {
  const navigation = useNavigation<any>();
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRandomRecipes = async () => {
      try {
        const recipes = await fetchRandomRecipes();
        setRecipes(recipes);
      } catch (error) {
        setError('Failed to fetch recipes');
      } finally {
        setLoading(false);
      }
    };

    getRandomRecipes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.textMessage}>Welcome to RecipeApp!</Text>
      </View>
      <ScrollView horizontal={true} style={styles.recipeScrollView}>
        {recipes.map(recipe => (
          <Card key={recipe.id} containerStyle={styles.recipeContainer}>
            <Card.Title style={styles.recipeTitle}>{recipe.title}</Card.Title>
            <Card.Image source={{ uri: recipe.image }} style={styles.recipeImage} />
          </Card>
        ))}
      </ScrollView>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>Recipe App is an application that provides you with new recipe ideas.</Text>
      </View>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Recipes")}>
        <Text style={styles.textMessage}>See More</Text>
      </TouchableOpacity>
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 100,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgreen',
    borderRadius: 8,
    marginEnd:30
  },
  recipeTitle:{
    marginTop: 5,
    textAlign: 'justify',
    color: 'darkgray',
    fontWeight: 'bold',
    marginEnd: 10,
    width:200
  }
});

export default Home;
