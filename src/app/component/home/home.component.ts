import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { Promotion } from 'src/app/shared/promotion';
import { PromotionService } from '../../service/promotion/promotion.service';
import { DishService } from 'src/app/service/dish/dish.service';
import { ThisReceiver } from '@angular/compiler';
import { Leader } from 'src/app/shared/leader';
import { LeaderService } from 'src/app/service/leader/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish!: Dish;
  promotion!: Promotion;
  leader!: Leader;
  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService
  ) {}

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe((dish) => (this.dish = dish));

    this.promotionService
      .getFeaturedPromotion()
      .subscribe((promotion) => (this.promotion = promotion));

    this.leaderService
      .getFeaturedLeader()
      .subscribe((leader) => (this.leader = leader));
  }
}
