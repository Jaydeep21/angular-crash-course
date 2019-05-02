import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResipesService } from '../resipes.service';
import { Recipe } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute : ActivatedRoute, 
    private recipeService : ResipesService,
    private router : Router,
    private alertCtrl : AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('recipeId')){
        //redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }
  onDeleteRecipe(){
    this.alertCtrl.create({
      header : "Are you sure?",
      message:"you want to delete this?", 
      buttons: [{
      text:'Cancel',
      role:'Cancel',
    },
    {
      text:'Delete',
      handler: ()=>{
        this.recipeService.deleteRecipe(this.loadedRecipe.id);  //calls the function deleteRecipe in recipe-service page
        this.router.navigate(['/recipes']);
      }
    }
  ]
}).then( alertEl => {
  alertEl.present();
  });    
  }
}
