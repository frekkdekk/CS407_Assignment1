import { createCamera } from './components/camera.js';
import { createDirectionalLight, createAmbientLight } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';
import { createOrbitControls } from './systems/controls.js';

import { createFloor } from './components/floor.js';
import { createFog } from './components/fog.js';
import { loadMonster } from './components/monster.js';

let camera, renderer, scene, loop; // Boilerplate only

let directionalLight, ambientLight; // Lights only

let floor, monster; // Additions only

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


    // Lights
    directionalLight = createDirectionalLight();
    ambientLight = createAmbientLight();
    scene.add(directionalLight, ambientLight);


    // Additions
    floor = createFloor(200, 200);
    scene.add(floor);

    scene.fog = createFog();
    

    // chatGPT provided the promise handling - I'm unfamiliar
    loadMonster().then(monster => {
      console.log(monster);
      scene.add(monster);
      //loop.updatables.push(monster);

    }).catch(error => {
      console.error('An error occurred:', error);

    });

    const resizer = new Resizer(container, camera, renderer);
  }

  
  start() {

    loop.start();

  }

  stop() {

    loop.stop();

  }

}

export { World };

