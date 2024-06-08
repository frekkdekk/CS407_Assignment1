import { Object3D, PerspectiveCamera, Vector3 } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  camera.position.set(0, 6, -8);

  camera.tick = () => {
    //camera.lookAt(temp)
  }

  return camera;
}

export { createCamera };
