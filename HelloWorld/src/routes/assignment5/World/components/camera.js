import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  camera.position.z = 40;
  camera.position.y = 10;

  return camera;
}

export { createCamera };
