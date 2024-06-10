import { createCamera } from './components/camera.js';
import { createDirectionalLight, createAmbientLight } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';
import { createOrbitControls } from './systems/controls.js';

import { createFloor } from './components/floor.js';
import { createFog } from './components/fog.js';
import { createTarget } from './components/target.js';
import { createCone } from './components/cone.js';

import { loadGuy } from './components/guy.js';
import { loadSkull } from './components/skull.js';


let camera, renderer, scene, loop; // Boilerplate only

let directionalLight, ambientLight; // Lights only

let floor; // Additions only

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

    target = createTarget(); // camera target
    camera.lookAt(target.position);

    vane = createCone();
    loop.updatables.push(vane);

    scene.fog = createFog();
    

    // GLTF Loading
    loadGuy().then(( {guy, actions} ) => {

      console.log("Guy Model: ", guy);
      console.log("Guy Animations: ", actions);

      guyActions = actions;
      
      guy.add(target); 
      //guy.add(vane); // Deprecated: 

      scene.add(guy);

      loop.updatables.push(guy);

    }).catch(error => {
      console.error('An error occurred:', error);
    });

    loadSkull().then(( skull ) => {

      scene.add(skull);
      loop.updatables.push(skull);

      // skull is not animated so I'm not adding it to updateables

    }).catch(error => {
      console.error('An error occurred:', error);
    });

  } // end constructor

  makeThatBoyRun() {
      guyActions.run.flag = true;
  }
  
  start() {

    loop.start();

  }

  stop() {

    loop.stop();

  }

}

export { World };

