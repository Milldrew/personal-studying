import {Component} from '@angular/core';
import * as THREE from 'three';
import {CoreService} from './core.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public coreService: CoreService
  ) {}

  ngOnInit() {
    this.coreService.initalize();


  }
}
