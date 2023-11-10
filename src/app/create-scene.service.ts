import {Injectable} from '@angular/core';
import * as three from 'three';
import {TransformService} from './transform.service';

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
  mesh = new three.Mesh(this.geometry, this.material);

  main() {
    this.scene.add(this.mesh);
    this.scene.add(this.camera);
    this.scene.add(new three.AxesHelper(5));
    const canvas = document.querySelector('canvas#webgl') || undefined
    const renderer = new three.WebGLRenderer({
      canvas
    });
    TransformService.moveMesh(this.camera, 1, 2, 10);
    renderer.setSize(this.size.width, this.size.height);
    TransformService.moveMesh(this.mesh, 2, 0, 3);
    const threeMatrix = new three.Matrix4();
    threeMatrix.makeRotationFromEuler(new three.Euler(0, 8, 0));

    this.mesh.setRotationFromMatrix(threeMatrix);



    renderer.render(this.scene, this.camera);


  }
}
