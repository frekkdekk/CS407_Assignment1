import { createCamera } from './components/camera.js';
import { createOctohedron, wireframeMaterial, standardMaterial } from './components/octohedron.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

let octohedron;
let light;

let isAnimated;
let isWireframe;


class World {

    constructor(container) {

        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();

        isAnimated = true;
        isWireframe = false;

        container.append(renderer.domElement);

        octohedron = createOctohedron();

        loop = new Loop(camera, scene, renderer);

        loop.updatables.push(octohedron)

        light = createLights();

        scene.add(octohedron, light);

        const resizer = new Resizer(container, camera, renderer);

    }

    start() {

        loop.start();

    }

    stop() {

        loop.stop();

    }


    toggleWireframe() {

        isWireframe = !isWireframe;

        if (isWireframe) {
            console.log("Wireframe on")
            octohedron.material = wireframeMaterial;
            if (!isAnimated) {renderer.render(scene, camera)}
        } else {
            console.log("Wireframe off")
            octohedron.material = standardMaterial;
            if (!isAnimated) {renderer.render(scene, camera)}
        }

    }


    toggleAnimation() {

        isAnimated = !isAnimated;

        if (isAnimated) {
            console.log("Animation starting")
            loop.start();
        } else {
            console.log("Animation stopping")
            loop.stop();
        }

    }

}

export { World };
