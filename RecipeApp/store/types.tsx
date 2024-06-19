export interface User {
    name: string;
    username: string;
    email?: string;
    age: number;
    favoriteCuisine: string;
    avatar: string;
  }
  
  export interface UserState {
    user: User | null;
    userRecipes: any[];
  }
  
  export interface RootState {
    user: UserState;
  }
  