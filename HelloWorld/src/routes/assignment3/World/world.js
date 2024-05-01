import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
//import { createPolyhedron } from './components/polyhedron.js';
import { createTorus } from './components/torus.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';


let camera;
let renderer;
let scene;
let loop;

let polyhedron;
let torus;

let light;

let isAnimated;

class World {
    constructor(container) {

        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();

        isAnimated = false;

        container.append(renderer.domElement);

        //polyhedron = createPolyhedron();
        torus = createTorus();

        loop = new Loop(camera, scene, renderer);

        //loop.updatables.push(polyhedron)
        loop.updatables.push(torus)

        light = createLights();

        scene.add(torus, light);

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

