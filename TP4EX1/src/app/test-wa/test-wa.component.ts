import { Component } from '@angular/core';

@Component({
  selector: 'was-test-wa',
  templateUrl: './test-wa.component.html',
  styleUrls: ['./test-wa.component.css'],
})
export class TestWaComponent {
  pers: Person = { nom: 'Ali', age: 15 };
}

export class Person {
  constructor(nom: string, age: number) {}
}
