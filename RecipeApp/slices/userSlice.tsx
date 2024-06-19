import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, User } from '../store/types';

const initialState: UserState = {
  user: null,
  userRecipes: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
    setUserRecipes(state, action: PayloadAction<any[]>) { 
      state.userRecipes = action.payload;
    }
  }
});

export const { setUser, setUserRecipes } = userSlice.actions;
export default userSlice.reducer;
