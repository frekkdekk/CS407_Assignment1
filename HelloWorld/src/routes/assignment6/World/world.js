import { createCamera } from './components/camera.js';
import { createDirectionalLight, createAmbientLight } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let camera;
let renderer;
let scene;
let loop;

let directionalLight; 
let ambientLight; 

let isAnimated;

class World {
    constructor(container) {

        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();

        loader = new GLTFLoader();

        const loadedData = loader.load('');

        isAnimated = true;

        container.append(renderer.domElement);

        loop = new Loop(camera, scene, renderer);

        directionalLight = createDirectionalLight();
        ambientLight = createAmbientLight();

        scene.add(directionalLight, ambientLight);

        const resizer = new Resizer(container, camera, renderer);

    }

    render() {

        renderer.render(scene, camera);

    }

    start() {

        loop.start();

    }

    stop() {

        loop.stop();

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

    updateColor(color) {
        //torus.material.color.set(color);
        //cone.material.color.set(color);
        renderer.render(scene, camera);
    }

    toggleAmbientLight() {
        let k;
        k = ambientLight.intensity? 0 : 7;
        ambientLight.intensity = k;
        renderer.render(scene, camera);
    }
}

export { World };

