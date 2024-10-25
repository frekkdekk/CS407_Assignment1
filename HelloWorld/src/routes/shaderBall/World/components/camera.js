import { PerspectiveCamera, Vector3 } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  camera.position.set(3, 4, 3);

  return camera;
}

export { createCamera };
