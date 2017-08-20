import {Component, OnInit}			from '@angular/core';
import {Router}						from '@angular/router';
import {FormControl, Validators}	from '@angular/forms';

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

	readonly nameMaxLength: number = 15;
	readonly nameMinLength: number = 3;
	newHero: boolean;
	heroes: Hero[];
	selectedHero: Hero;
	heroFormControl: FormControl;

	constructor(
		private heroService: HeroService,
		private router: Router) {
		/*
		 avoid calling getHeroes() here because constructor should used
		 for simple initializations, not complex logic or remote data access.
		 */
		this.newHero = true;
		this.heroFormControl = new FormControl('', [
			Validators.pattern(new RegExp('^[a-zA-Z0-9 ]{'+this.nameMinLength+','+this.nameMaxLength+'}$')),
			/*Validators.pattern(/^[a-zA-Z0-9 ]{3,15}$/),*/
	    	/*Validators.required,
	    	Validators.minLength(this.nameMinLength),
	    	Validators.maxLength(this.nameMaxLength)*/
	    ]);
	};

	onSelect(hero: Hero): void {
		this.selectedHero = hero;

		/* TODO #415: delete this sample Observable code */
		//let source = Observable
		    //.interval(500 /* ms */)
		    //.timeInterval()
		   // .take(3);

		/* let subscription = source.subscribe(
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

	onKeyUp(event): void {
		// TODO check availability or duplicity with latency or timeout
		console.log(JSON.stringify(event.target.value));
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroesSlowly()
				.then(heroes => this.heroes = heroes);
	}

	gotoDetail(): void {
  		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	toggleHero(): void {
		this.newHero = !this.newHero;
	}

	add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.heroService.create(name)
				.then(hero => {
					this.heroes.push(hero);
					this.selectedHero = null;
				});
	}

	delete(hero: Hero): void {
		this.heroService
			.delete(hero.id).then(() => {
				this.heroes = this.heroes.filter(h => h !== hero);
				if (this.selectedHero === hero) { this.selectedHero = null; }
			});
	}
}
