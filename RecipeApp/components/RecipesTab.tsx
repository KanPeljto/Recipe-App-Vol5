import React from "react";
import { ScrollView } from "react-native";
import RecipeCard from "./RecipeCard";
import { recipes } from "../data/recipes";

const RecipesTab: React.FC = () => {
  return (
    <ScrollView style={{flex:1}}>
      {recipes.map((recipe)=>(
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </ScrollView>
  )
}

export default RecipesTab;