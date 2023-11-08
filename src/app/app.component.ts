
import {Component} from '@angular/core';
import {CreateSceneService} from './create-scene.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private createSceneService: CreateSceneService) {}

  ngOnInit() {
    this.createSceneService.main();
  }
}
