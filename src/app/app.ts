import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produtos } from './components/produtos/produtos';

@Component({
  selector: 'app-root',
  imports: [Produtos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu-app');
}
