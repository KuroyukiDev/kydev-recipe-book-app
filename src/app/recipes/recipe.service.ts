import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Green Tea Mochi', 'Yummy Mochi flavored with Matcha Powder!', 'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_13010_green-tea-mochi.jpg'),
    new Recipe('Yakisoba with Chicken', 'Japanese buckwheat flour noodles with chicken at their best!', 'https://images.media-allrecipes.com/userphotos/560x315/2220105.jpg'),
    new Recipe('Beef Kushiyaki', 'A Japanese favorite!', 'https://images.media-allrecipes.com/userphotos/560x315/879272.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
