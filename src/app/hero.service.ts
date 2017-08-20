import { Injectable }		from '@angular/core';

import { Headers, Http } from '@angular/http';
import { Hero }		from './hero';
/*import { HEROES }	from './mock-heroes';*/

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

	/* This URL match requirements of angular-in-memory-web-api and
	   InMemoryDataService collections of heroes. */
	private heroesUrl = 'api/heroes';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) {}

	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}

	// ugly way : fetch all heroes than extract the one who's mathcing
	/*getHero(id: number): Promise<Hero> {
	  return this.getHeroesSlowly()
	  		.then(heroes => heroes.find(hero => hero.id === id));
	}*/

	getHero(id: number): Promise<Hero> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.get(url)
				.toPromise()
				.then(response => response.json().data as Hero)
				.catch(this.handleError);
	}

	/*getHeroes(): Promise<Hero[]> {
		console.log("querying heroes from service")
		return Promise.resolve(HEROES);
	}*/

	getHeroes(): Promise<Hero[]> {
		console.log("querying heroes from Http")
  		return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as Hero[])
             .catch(this.handleError);
	}

	getHeroesSlowly(): Promise<Hero[]> {
		console.log("querying heroes from service with timeout ...")
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}

	update(hero: Hero): Promise<Hero> {
  		const url = `${this.heroesUrl}/${hero.id}`;
  		return this.http
    		.put(url, JSON.stringify(hero), {headers: this.headers})
    		.toPromise()
    		.then(() => hero)
    		.catch(this.handleError);
	}

	create(name: string): Promise<Hero> {
		return this.http
			.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data as Hero)
			.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}
}



