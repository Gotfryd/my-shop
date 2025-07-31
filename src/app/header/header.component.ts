import { Component } from '@angular/core';
import { TopMenu } from "./top-menu/top-menu.component";
import { MainMenu } from "./main-menu/main-menu.component";

@Component({
  selector: 'app-header',
  imports: [TopMenu, MainMenu],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class Header {

}
