import * as THREE from 'three';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  scene: THREE.Scene = new THREE.Scene();
  /**
    * Object Geometry
    */
  geometry = new THREE.BoxGeometry(1, 1, 1);
  /**
    * Object Material
    */
  material = new THREE.MeshBasicMaterial({
    color: 0xffff88,
    wireframe: true

  });
  /**
    * Object Mesh
    */
  mesh = new THREE.Mesh(this.geometry, this.material);
  sizes = {
    width: 800,
    height: 600
  }
  /**
    * Camera
    */
  camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height);




  initalize() {
    this.scene.add(this.mesh);
    this.scene.add(this.camera);
    const canvas = document.querySelector('canvas.webgl') || undefined
    this.camera.position.z = 3;
    this.camera.position.x = 1;
    this.camera.position.y = 1;
    this.camera.lookAt(this.mesh.position);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    })
    renderer.render(this.scene, this.camera);

  }
}
