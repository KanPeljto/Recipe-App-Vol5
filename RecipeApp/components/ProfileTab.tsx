import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { userData } from '../data/userinfo';
import RecipeCard from './RecipeCard';
import NavigationBar from './NavigationBar';
import { recipes } from '../data/recipes';

const ProfileTab: React.FC = () => {

    const userRecipes = recipes.filter(recipe => recipe.author === userData.username);

    const userRecipesCount = userRecipes.length;


  return (
    
    <View style={styles.container}>
        <View style={styles.navBar}>
        {/* <NavigationBar/> */}
        </View>
      <View style={styles.profileContainer}>
        <Image source={userData.avatar} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{userData.username}</Text>
          <Text style={styles.age}>Name: {userData.name}</Text>
          <Text style={styles.age}>Age: {userData.age}</Text>
          <Text style={styles.age}>Favorite cuisine: {userData.favoriteCuisine}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Recipes by {userData.username}: {userRecipesCount}</Text>
        <ScrollView>
          {userRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ScrollView>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileContainer: {
    marginTop:35,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  age: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
  statsText: {
    fontSize: 18,
    marginBottom: 10,
  },
  navBar:{
    width:'100%'
  }
});

export default ProfileTab;
