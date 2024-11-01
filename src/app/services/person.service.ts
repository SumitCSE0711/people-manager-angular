// src/app/services/person.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the person data model
export interface Person {
  id: number;
  name: string;
  age: number;
  gender: string;
  mobileNumber: string;
}

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = 'http://localhost:5000/api/person'; // Update this to match your actual API URL

  constructor(private http: HttpClient) {}

  // Get all people
  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  // Get a single person by ID
  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  // Create a new person
  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  // Update a person
  updatePerson(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${id}`, person);
  }

  // Delete a person
  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
