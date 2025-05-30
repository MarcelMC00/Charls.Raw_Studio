import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class App {
  protected title = 'Charls_Raw';

  show = true;
  toggle() {
    console.log('Toggling...');
    this.show = !this.show;
  }
}
