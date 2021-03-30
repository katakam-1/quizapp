import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/Logical.json', name: 'Logical' },
      { id: 'data/gk.json', name: 'GK' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

}