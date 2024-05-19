import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { userData } from '../data/userinfo';
import RecipeCard from './RecipeCard';
import NavigationBar from './NavigationBar';
import { recipes } from '../data/recipes';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useUserProfile } from '../hooks/useUserProfile';

type UserProfileRouteParams = {
  username: string;
};

type ProfileTabRouteProp = RouteProp<{ ProfileTab: UserProfileRouteParams }, 'ProfileTab'>;

const ProfileTab: React.FC = () => {
  const route = useRoute<ProfileTabRouteProp>();
  const { username } = route.params;

  const { user , userRecipes }= useUserProfile(username);

  if (!user) {
    return <Text>User not found</Text>;
  }


  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
       
      </View>
      <View style={styles.profileContainer}>
        <Image source={user.avatar} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.username}</Text>
          <Text style={styles.age}>Name: {user.name}</Text>
          <Text style={styles.age}>Age: {user.age}</Text>
          <Text style={styles.age}>Favorite cuisine: {user.favoriteCuisine}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Recipes by {user.username}:</Text>
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
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileContainer: {
    marginTop: 35,
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
  navBar: {
    width: '100%',
  },
});

export default ProfileTab;
