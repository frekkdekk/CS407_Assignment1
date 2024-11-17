import { createCamera } from './components/camera.js';
import { createDirectionalLight, createAmbientLight } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';
import { createOrbitControls } from './systems/controls.js';

import { createFloor } from './components/floor.js';
import { createFog } from './components/fog.js';

import { loadGuy, direction } from './components/guy.js';


let camera, renderer, scene, loop; // Boilerplate only

let directionalLight, ambientLight; // Lights only

let floor; // Additions only

let navDirection = direction;


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

    loadGuy().then(( {guy, actions} ) => {

      console.log("Guy Model: ", guy);
      console.log("Guy Animations: ", actions);

      const guyActions = actions;

      camera.lookAt(guy.children[2].position);

      scene.add(guy);

      loop.updatables.push(guy);

    }).catch(error => {
      console.error('An error occurred:', error);
    });

  } // end constructor

  keyDown(keyEvent) {
      switch(keyEvent.key) {
        case 'w':
          navDirection.z += 1;
          break;
        case 's':
          navDirection.z -= 1;
          break;
        case 'a':
          navDirection.x -= 1;
          break;
        case 'd':
          navDirection.x += 1;
          break;
        default:
          break;
      }
  }

  keyUp(keyEvent) {
    switch(keyEvent.key) {
      case 'w':
      case 's':
        navDirection.z = 0;
        break;
      case 'a':
      case 'd':
        navDirection.x = 0;
        break;
    }
  }
  
  start() {

    loop.start();

  }

  stop() {

    loop.stop();

  }

}

export { World };