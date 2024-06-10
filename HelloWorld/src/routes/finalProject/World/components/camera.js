import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  camera.position.set(0, 5, 5);
  camera.lookAt(0, 10, 0);


  camera.tick = () => {
    //camera.lookAt(temp)
  }

  return camera;
}

export { createCamera };
