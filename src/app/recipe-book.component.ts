import { Component } from '@angular/core';


import{HeaderComponent} from './header.component';
import {RecipeService} from './recipes/recipe.service';

@Component({
  selector: 'recipe-book-app',
  templateUrl: './recipe-book.component.html',
  providers:[RecipeService]
  
})
export class RecipeBookAppComponent {
 
}
