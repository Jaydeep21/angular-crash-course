import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class ResipesService {
  private recipes: Recipe[] = [{
    id: 'r1',
    title: 'Lemon Juice',
    imageUrl: 'https://4.imimg.com/data4/SR/UH/MY-2944395/lemon-juice-500x500.jpg',
    ingredients : ['salt', 'lemon','water']
  },
  {
    id: 'r2',
    title: 'Watermelon Juice',
    imageUrl: 'http://cdn2.foodviva.com/static-content/food-images/juice-recipes/watermelon-juice-recipe/watermelon-juice-recipe.jpg',
    ingredients : ['water','melon']
  },
  {
    id: 'r3',
    title: 'Watermelon Juice',
    imageUrl: 'http://cdn2.foodviva.com/static-content/food-images/juice-recipes/watermelon-juice-recipe/watermelon-juice-recipe.jpg',
    ingredients : ['only','melon']
  }
]; 
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
