import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

	createDb() {
		const heroes = [
			{id: 0,  name: 'Zero'},
			{id: 11, name: 'Bender'},
			{id: 12, name: 'R2-D2'},
			{id: 13, name: 'Pinky Pie'},
			{id: 14, name: 'Tesha'},
			{id: 15, name: 'Burn.E'},
			{id: 16, name: 'Tychus'},
			{id: 17, name: 'Zoidberg'},
			{id: 42, name: 'Marvin'},
			{id: 19, name: 'Mordin'},
			{id: 20, name: 'Aang'}
		];
		return {heroes};
	}
}
