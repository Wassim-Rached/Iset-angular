import { Component, Input } from '@angular/core';
import { Person } from '../test-wa/test-wa.component';

@Component({
  selector: 'was-test-wa2',
  templateUrl: './test-wa2.component.html',
  styleUrls: ['./test-wa2.component.css'],
})
export class TestWa2Component {
  person: string = '';
}
