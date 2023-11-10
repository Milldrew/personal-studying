import * as THREE from 'three';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformService {

  /**
    * this service is uselss because mesh.scale.set does this.
    */
  static moveMesh(mesh: THREE.Mesh | THREE.PerspectiveCamera, x: number, y: number, z: number) {
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
  }

}
