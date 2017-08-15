/*import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';*/
import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
/*export class HeroDetailComponent implements OnInit, OnChanges {*/
	// hero is an input property available for binding by a parent component

	readonly maxLength: number = 45;
	readonly minLength: number = 3;

	@Input() hero: Hero;
	/*heroCopy: Hero;*/

	constructor(){

	};


	/*ngOnInit() {
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