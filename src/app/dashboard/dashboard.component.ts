import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../model/hero';
import { HeroService } from '../model/hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
    let url = `/heroes/${hero.id}`;
    this.router.navigateByUrl(url);
  }

  get title() {
    let count = this.heroes.length;
    let returnedMessage = '';
    if (count === 0) {
      returnedMessage = 'No heroes';
    }
    else if (count === 1) {
      returnedMessage = 'Top hero';
    }
    else {
      returnedMessage = 'Top heroes';
    }
    return returnedMessage;
  }
}
