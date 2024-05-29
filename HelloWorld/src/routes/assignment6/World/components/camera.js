import { PerspectiveCamera, MathUtils } from 'three';

let cameraAngle = 0,
  angle = 0;

function createCamera() {
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  camera.position.set (0, 2, 5)

  camera.tick = () => {
    cameraAngle = MathUtils.lerp( cameraAngle, angle, 0.01 );
    camera.position.setFromSphericalCoords( 15, 1, cameraAngle );
		camera.position.add( character.position );
	  camera.lookAt( character.position );
  }

  return camera;
}

export { createCamera };
