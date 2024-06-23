import axios from "axios";

const API_KEY='89fb2ffc42764036b42f67829d7ca9d7';
const BASE_URL = 'https://api.spoonacular.com';

export const fetchRandomRecipes=async()=> {
    try{
        const response = await fetch(`${BASE_URL}/recipes/random?apiKey=${API_KEY}&number=10`);
        const data= await response.json();
        return data.recipes;
        

    } catch(error){
        console.error('Error fetching recipes from api', error);
        throw error;
    }
};