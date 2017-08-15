
import 'rxjs/add/operator/switchMap';

/*import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';*/
import {Component, Input, OnInit}	from '@angular/core';
import {ActivatedRoute, ParamMap}	from '@angular/router';
import {Location}                	from '@angular/common';

import {Hero}			from './hero';
import {HeroService}	from './hero.service';

@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
/*export class HeroDetailComponent implements OnInit, OnChanges {*/

	readonly maxLength: number = 45;
	readonly minLength: number = 3;

	//@Input() hero: Hero; /* <-- Hero is received from a parent component property binding */
	hero: Hero;

	constructor(
		private heroService: HeroService,
  		private route: ActivatedRoute,
  		private location: Location)
	{};

	/*
	  Use Observable `paramMap` to extract the id parameter value from the ActivatedRoute
	  service and use the HeroService to fetch the hero with that id.

	  - The switchMap operator maps the id in the Observable route parameters to a new Observable,
	  the result of the HeroService.getHero() method.
	  - If a user re-navigates to this component while a getHero request is still processing,
	  switchMap cancels the old request and then calls HeroService.getHero() again.
	  - The hero id is a number. Route parameters are always strings.
	  So the route parameter value is converted to a number with the JavaScript (+) operator.
	*/
	ngOnInit(): void {
		this.route.paramMap
	    	.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
	    	.subscribe(hero => this.hero = hero);
	}

	/* navigate back from browser history through `Location` injected service */
	goBack(): void {
  		this.location.back();
	}

	/*
	heroCopy: Hero;

	ngOnInit() {
		//this.heroCopy = this.hero;
		this.heroCopy = this.duplicate(this.hero);
	}

	ngOnChanges(changes: SimpleChanges) {
		//console.log("changes : " + JSON.stringify(changes));
		if (changes.hero && !changes.hero.firstChange) {
			//this.heroCopy = changes.hero.currentValue;
			this.heroCopy = this.duplicate(changes.hero.currentValue);
		}
	}

	private duplicate(hero: Hero): Hero {
		return JSON.parse(JSON.stringify(hero));
	}*/
}