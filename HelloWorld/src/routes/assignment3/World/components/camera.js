import { PerspectiveCamera, Vector3 } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  camera.position.set(-2, 0, 6);
  camera.rotateOnAxis(new Vector3(0, 1, 0), -0.2);

  return camera;
}

export { createCamera };
