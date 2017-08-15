import { Injectable }		from '@angular/core';

import { Hero }		from './hero';
import { HEROES }	from './mock-heroes';

@Injectable()
export class HeroService {


	getHeroes(): Promise<Hero[]> {

		console.log("querying heroes from service")
		return Promise.resolve(HEROES);
	}				

	getHeroesSlowly(): Promise<Hero[]> {
		
		console.log("querying heroes from service with timeout ...")
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}
}		