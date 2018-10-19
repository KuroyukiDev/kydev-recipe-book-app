import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Green Tea Mochi',
      'Yummy Mochi flavored with Matcha Powder!',
      'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_13010_green-tea-mochi.jpg',
      [
        new Ingredient('Matcha Powder', 2),
        new Ingredient('Rice Flour', 300)
      ]),
    new Recipe(
      'Yakisoba with Chicken',
      'Japanese buckwheat flour noodles with chicken at their best!',
      'https://images.media-allrecipes.com/userphotos/560x315/2220105.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Bundles of Yakisoba Noodles', 2)
      ]),
    new Recipe(
      'Beef Kushiyaki',
      'A Japanese favorite!',
      'https://images.media-allrecipes.com/userphotos/560x315/879272.jpg',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Vegetables', 3)
      ])
  ];
  
  constructor(private slService: ShoppingListService) {

  }
  
  getRecipes() {
    return this.recipes.slice();
  }

  addRecipeToShoppingList(ingredients: Ingredient[]) {
    this.slService.addRecipeToList(ingredients);
  }
}
