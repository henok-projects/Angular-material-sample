import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../../shared/dish';
import { DishService } from 'src/app/service/dish/dish.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  // @Input()
  dish!: Dish;
  dishIds!: string[];
  privous!: string;
  next!: string;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // let id = this.route.snapshot.params['id'];

    this.dishService.getDishIds().subscribe((dishIds) => {
      this.dishIds = dishIds;
    });

    this.route.params
      .pipe(
        switchMap((params: Params) => this.dishService.getDish(params['id']))
      )
      .subscribe((dis) => {
        this.dish = dis;
        this.setPrevNext(this.dish.id);
      });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    // Getting previous dish id
    this.privous =
      this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    // Getting next dish id
    this.next =
      this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }
}
