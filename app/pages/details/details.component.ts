import { DishService } from 'src/app/services/dish.service';
import { Dish } from './../../services/dish.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dish: Dish;
  favorite: boolean;

  helperIngredient: string;
  constructor(
    private dishService: DishService,
    @Inject(MAT_DIALOG_DATA) private data: { id: number, favorite: boolean }
  ) { }

  ngOnInit(): void {
    this.dish = this.dishService.fetchDish(this.data.id);
    this.favorite = this.data.favorite;
    // Dummy filler data
    this.helperIngredient = 'Preheat the oven to 350 degrees F. Coat two 9-inch-round cake pans with cooking spray and line the bottoms with parchment paper.Whisk the cocoa powder and 1 1/2 cups boiling water in a medium bowl until smooth; set aside. Whisk the flour, sugar, baking powder, baking soda and salt in a large bowl until combined. ';
  }

}
