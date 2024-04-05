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

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Image 
        source={require('./assets/central-icon.png')}
        style={styles.icon}
      /> */}
      <NavigationBar/>
      {/* <Home/> */}
      {/* <ScrollView style={styles.scrollView}>
       
      </ScrollView> */}
      {/* <Favorites/> */}
      {/* <CategoryIcons/> */}
      {/* {recipes.map(recipe => (
          <View key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </View>
        ))} */}

        <Register/>

        {/* <Login/> */}
      

       {/* <ProfileTab/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f5fcff',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 40,
    backgroundColor: 'red',
  },
  scrollView: {
    width: '80%',
  },
});

export default App;
