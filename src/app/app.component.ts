import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header.component';
import { TopHeader } from "./top-header/top-header";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TopHeader],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title: string = 'AngProJect';
}
