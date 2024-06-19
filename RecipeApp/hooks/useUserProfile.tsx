import { useEffect, useState } from "react";
import { userData } from "../data/userinfo";
import { recipes } from "../data/recipes";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../slices/userSlice";
import { setUserRecipes } from "../slices/userSlice";
import { RootState } from "../store/types";
import { UserState } from "../store/types";


export const useUserProfile = (username: string) => {
    const dispatch= useDispatch();
   
    const {user,userRecipes}= useSelector((state:RootState)=>state.user);

    useEffect(() => {
        const foundUser = userData.find(user => user.username === username);
        dispatch(setUser(foundUser));

        if (foundUser) {
            const userRecipes = recipes.filter(recipe => recipe.author === foundUser.username);
            dispatch(setUserRecipes(userRecipes));
        }
    }, [username]);

    return { user, userRecipes };
};
