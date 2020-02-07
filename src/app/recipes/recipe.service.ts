import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe-list/recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {
    }

    private recipes: Recipe[] = [
        new Recipe(
            'Bacon with eggs',
            'Tastyyy!',
            'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Cheesy-mince-pasta-bake-1620x1066.jpg',
            [
                new Ingredient('Egg', 4),
                new Ingredient('Cheese', 1),
                new Ingredient('Bacon', 2)
            ]),
        new Recipe(
            'Chichi Burger',
            'За бат Венци! :D',
            'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AABHnbv.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=1163&y=707',
            [
                new Ingredient('Meatball', 3),
                new Ingredient('Ketchup', 1),
                new Ingredient('Potatoes', 2)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }  

    onAddToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}