import {Injectable} from '@angular/core';
import * as three from 'three';

@Injectable({
  providedIn: 'root'
})
export class CreateSceneService {
  scene = new three.Scene();

  camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  size = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  geometry = new three.BoxGeometry();
  material = new three.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
  });
  mesth = new three.Mesh(this.geometry, this.material);

  main() {
    this.scene.add(this.mesth);
    this.scene.add(this.camera);
    const canvas = document.querySelector('canvas#webgl') || undefined
    const renderer = new three.WebGLRenderer({
      canvas
    });
    this.camera.position.z = 5;
    renderer.setSize(this.size.width, this.size.height);
    renderer.render(this.scene, this.camera);


  }
}
