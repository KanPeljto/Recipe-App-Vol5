import { useEffect, useState } from "react";
import { userData } from "../data/userinfo";
import { recipes } from "../data/recipes";

export const useUserProfile = (username: string) => {
    const [user, setUser] = useState(null);
    const [userRecipes, setUserRecipes] = useState([]);

    useEffect(() => {
        const foundUser = userData.find(user => user.username === username);
        setUser(foundUser);

        if (foundUser) {
            const userRecipes = recipes.filter(recipe => recipe.author === foundUser.username);
            setUserRecipes(userRecipes);
        }
    }, [username]);

    return { user, userRecipes };
};
