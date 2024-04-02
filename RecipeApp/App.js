import React from 'react';
import { StyleSheet, View } from 'react-native';
import { recipes } from './data/recipes';
import RecipeCard from './components/RecipeCard';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import Recipe from './components/Recipe';

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
      source={require('./assets/central-icon.png')}
      style={styles.icon}
    />

    <ScrollView style={styles.scrollView}>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    
      
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5fcff',
  },

  iconBarContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'orange',
  },

  icon: {
    width:50,
    height: 50,
    marginBottom: 40,
    backgroundColor:'red'
  },

  scrollView: {
    width:'80%',
  }
  
});

export default App;