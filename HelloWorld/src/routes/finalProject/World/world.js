import { createCamera } from './components/camera.js';
import { createDirectionalLight, createAmbientLight } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';
import { createOrbitControls } from './systems/controls.js';

import { createFloor } from './components/floor.js';
import { createFog } from './components/fog.js';


let camera, renderer, scene, loop; // Boilerplate only

let directionalLight, ambientLight; // Lights only

let floor; // Additions only


class World {
  constructor(container) {

    // Boilerplate
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();

    container.append(renderer.domElement);
    loop = new Loop(camera, scene, renderer);

    const controls = createOrbitControls(camera, renderer.domElement);
    controls.target.set(1, 2, 3);

    const resizer = new Resizer(container, camera, renderer);

    // Lights
    directionalLight = createDirectionalLight();
    ambientLight = createAmbientLight();
    scene.add(directionalLight, ambientLight);


    // Additions
    floor = createFloor(200, 200);
    scene.add(floor);

    scene.fog = createFog();
    

    // GLTF Loading
    

  } // end constructor
  
  start() {

    loop.start();

  }

  stop() {

    loop.stop();

  }

}

export { World };

