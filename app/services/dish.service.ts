import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

export interface Dish {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DishService {

  dishes: Dish[] = [];

  constructor(public http: HttpClient, private router: Router) { }


  fetchDishes() {
    return this.http.get<Dish[]>('http://starlord.hackerearth.com/recipe')
      .pipe(tap(res => {
        this.dishes = res;
        localStorage.setItem('dishes', JSON.stringify(res));
      }));
  }

  fetchDish(id: number): Dish {
    if (!this.dishes.length) {
      this.dishes = JSON.parse(localStorage.getItem('dishes'));
    }
    return this.dishes.find(dish => dish.id == id);
  }
}
