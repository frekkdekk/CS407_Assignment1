import { createCamera } from './components/camera.js';
import { createSpotLight, createAmbientLight, createDirectionalLight } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createFog } from './components/fog.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';
import { loadMonster } from './components/monster.js';

import { createOrbitControls } from './systems/controls.js';

import { createFloor } from './components/floor.js';

let camera, renderer, scene, loop; // Necessary bits

let ambientLight, directionalLight, spotLight; // Lighting

let floor, monster; // Additions to the scene


class World {
    constructor(container) {

        // Basic setup
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);
        renderer.setSize(window.innerWidth, window.innerHeight);
        const resizer = new Resizer(container, camera, renderer);
        

        // Setting the stage
        floor = createFloor(200, 200);
        scene.add(floor);

        directionalLight = createDirectionalLight();
        scene.add(directionalLight);

        ambientLight = createAmbientLight();
        scene.add(ambientLight);

        spotLight = createSpotLight();
        scene.add(spotLight);

        scene.fog = createFog();


        // Controls
        const controls = createOrbitControls(camera, renderer.domElement);
        controls.target.set(1, 1, 1);
    }

    async init() {
        monster = await loadMonster();

        scene.add(monster);

    }

    start() {

        loop.start();

    }

    stop() {

        loop.stop();

    }

    keyDown(event) {
        if (event.key === 'w') {
            camControls.moveForward = true;
            camControls.update(loop.delta);
          }
          if (event.key === 'a') {
            camControls.moveLeft = true;
            camControls.update(loop.delta);
          }
          if (event.key === 'd') {
            camControls.moveRight = true;
            camControls.update(loop.delta);
          }
          if (event.key === 's') {
            camControls.moveBackward = true;
            camControls.update(loop.delta);
          }
    }

}

export { World };

