import { Component, OnInit } from '@angular/core';

import { Dish, DishService } from './../../services/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dishes: Dish[];
  filteredDishes: Dish[];
  search: string;

  constructor(
    private dishService: DishService
  ) { }

  ngOnInit(): void {
    this.dishService.fetchDishes().subscribe(res => {
      this.dishes = res;
      this.filteredDishes = res;
    },
      err => {
        console.log('error');
      });
  }



  searchDishes() {
    this.filteredDishes = this.dishes.filter(dish => dish.name.toLowerCase().includes(this.search.toLowerCase()));
    if (!this.filteredDishes.length) {
      this.filteredDishes = this.dishes;
    }

  }
}
