import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import * as C from '../utils/constant';
import { Team } from '../models/team';


@Injectable()
export class ApiTeamService {

	constructor(private http: Http) { }

	private handleError(error: any): Promise<any> {
		console.error('Erreur : ', error); 
		return Promise.reject(error.message || error);
	}

	getTeam(): Promise<Team[]> {
		const url = C.API_BASE;
		const query = `query {
			franchise(idLigue: 1) { 
				idUsfoot,
				franchise,
				franchise2
			}
		}`;

		return this.http.get(url + query)
		.toPromise()
		.then(response => response.json().data.franchise as Team[])
		.catch(this.handleError);
	}

}
