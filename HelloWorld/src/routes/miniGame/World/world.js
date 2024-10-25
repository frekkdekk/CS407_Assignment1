import { createCamera } from './components/camera.js';
import { createDirectionalLight, createAmbientLight } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';
import { createOrbitControls } from './systems/controls.js';

import { createFloor } from './components/floor.js';
import { createFog } from './components/fog.js';

import { loadGuy } from './components/guy.js';


let camera, renderer, scene, loop; // Boilerplate only

let directionalLight, ambientLight; // Lights only

let floor, target; // Additions only

let guyActions; // Animation only


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

    let guy = loadGuy().then(( {guy, actions} ) => {

      console.log("Guy Model: ", guy);
      console.log("Guy Animations: ", actions);

      guyActions = actions;
      
      guy.add(target); 

      scene.add(guy);

      loop.updatables.push(guy);

    }).catch(error => {
      console.error('An error occurred:', error);
    });

    camera.lookAt(guy.target.position);

  } // end constructor

  keyDown(keyEvent) {
      switch(keyEvent.key) {
        case 'w':
          guy.position.z += 1;
          break;
        case 's':
          guy.position.z -= 1;
          break;
        case 'a':
          guy.position.x -= 1;
          break;
        case 'd':
          guy.position.x += 1;
          break;
        default:
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