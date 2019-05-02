import { Component, OnInit } from '@angular/core';
import { ResipesService } from './resipes.service';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  
  constructor(private recipesService: ResipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  
}
