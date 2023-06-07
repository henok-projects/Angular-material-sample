import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { LeaderService } from 'src/app/service/leader/leader.service';
import { Leader } from 'src/app/shared/leader';
import { LEADERS } from 'src/app/shared/leaders';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  leaders!: Leader[];
  //lead = LEADERS;
  constructor(
    private leaderService: LeaderService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe((leaders) => {
      this.leaders = leaders;
    });
  }
}
