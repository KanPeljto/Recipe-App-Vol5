import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { recipes } from './data/recipes';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Favorites from './components/Favorites';
import CategoryIcons from './components/CategoryIcons';
import ProfileTab from './components/ProfileTab';
import Register from './components/Register';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RecipesTab from './components/RecipesTab';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();
const Stack= createStackNavigator<any>();

const RecipeStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='RecipesTab' component={RecipesTab}/>
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
    </Stack.Navigator>
  )
}

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator style={styles.tabNavigator}>
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen name='Recipes' component={RecipeStack} />
          <Tab.Screen name='Profile' component={ProfileTab}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  tabNavigator: {
    flex: 1,
  },
});

export default App;