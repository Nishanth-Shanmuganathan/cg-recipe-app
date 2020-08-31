import { Dish } from './../../../services/dish.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../../details/details.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() search = '';
  @Input() dish: Dish;
  @Input() helperBackdrop: boolean;
  helperFavorite = false;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  navigate(id: number) {
    this.dialog.open(DetailsComponent, {
      data: {
        id,
        favorite: this.helperFavorite
      },
      disableClose: true
    });
  }

}
