import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createOrbitControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;

  controls.keys = {
    LEFT: 'ArrowLeft', //left arrow
    UP: 'ArrowUp', // up arrow
    RIGHT: 'ArrowRight', // right arrow
    BOTTOM: 'ArrowDown' // down arrowå
  }

  controls.tick = () => controls.update();

  return controls;
}

export { createOrbitControls };