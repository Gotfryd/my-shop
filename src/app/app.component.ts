import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header.component';
import { TopHeader } from './top-header/top-header';
import { Container } from './container/container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TopHeader, Container],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  protected readonly title: string = 'AngProJect';
}
