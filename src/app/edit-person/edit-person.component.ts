// src/app/edit-person/edit-person.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService, Person } from '../services/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  person: Person = { id: 0, name: '', age: 0, gender: '', mobileNumber: '' };

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPerson(id).subscribe((data) => (this.person = data));
  }

  save(): void {
    this.personService.updatePerson(this.person.id, this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
