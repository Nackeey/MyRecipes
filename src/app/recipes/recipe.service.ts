import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('OMLET', 'OPISANIE', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Cheesy-mince-pasta-bake-1620x1066.jpg'),
        new Recipe('sanvi4', 'qk e И ЧЕРНАТА ПАНТЕРА ГО ЯДЕ', 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AABHnbv.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=1163&y=707')
      ];

    getRecipes() {
        return this.recipes.slice();
    }  
}