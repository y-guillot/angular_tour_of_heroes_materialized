import {Component, OnInit}	from '@angular/core';

import {Hero}				from './hero';
import {HeroService}		from './hero.service';

/* TODO #413 : delete this import */
//import { Observable, TimeInterval }	from 'rxjs';
/* END TODO #413 */

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css'],
	/* set HeroService injectable through the constructor of this component */
	/*providers: [HeroService]*/
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;
	constructor(private heroService: HeroService) {
		/*
		 avoid calling getHeroes() here because constructor should used
		 for simple initializations, not complex logic or remote data access.
		 */
	};
	onSelect(hero: Hero): void {
		this.selectedHero = hero;

		/* TODO #415: delete this sample Observable code */
		//let source = Observable
		    //.interval(500 /* ms */)
		    //.timeInterval()
		   // .take(3);

	/*	let subscription = source.subscribe(
		    function (x: TimeInterval<number>) {
		        console.log('Next: ' + x.value + ' : ' + x.interval );
		    },
		    function (err) {
		        console.log('Error: ' + err);
		    },
		    function () {
		        console.log('Completed');
		    });*/
		/* END TODO #415 */

	};

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroesSlowly()
				.then(heroes => this.heroes = heroes);
	}

}