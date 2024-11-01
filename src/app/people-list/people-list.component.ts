// src/app/people-list/people-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from '../services/person.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.personService.getPeople().subscribe((data) => {
      this.people = data;
    });
  }

  deletePerson(id: number): void {
    this.personService.deletePerson(id).subscribe(() => {
      this.people = this.people.filter((person) => person.id !== id);
    });
  }
}
