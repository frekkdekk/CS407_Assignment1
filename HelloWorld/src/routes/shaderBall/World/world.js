import { createCamera } from './components/camera.js';
import { createDirectionalLight, createAmbientLight } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';
import { Controls } from './systems/controls.js';

import { Sphere } from './components/sphere.js';

import { GridHelper } from 'three';

let camera;
let renderer;
let scene;
let loop;

let directionalLight; 
let ambientLight;

let isAnimated;
let sphere;

class World {
    constructor(container, vShaderCode, fShaderCode) {

        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();

        isAnimated = true;

        const controls = new Controls(camera, renderer.domElement);
        controls.target.set(1, 2, 3);

        var gridHelper = new GridHelper( 4, 10 );
        scene.add( gridHelper );

        container.append(renderer.domElement);

        loop = new Loop(camera, scene, renderer);

        directionalLight = createDirectionalLight();
        ambientLight = createAmbientLight();
        scene.add(directionalLight, ambientLight);

        sphere = new Sphere(1, vShaderCode, fShaderCode);
        scene.add(sphere);
        loop.updatables.push(sphere);

        const resizer = new Resizer(container, camera, renderer);

    }

    updateShaders(vertexShader, fragmentShader) {
        sphere.setVertexShader(vertexShader);
        sphere.setFragmentShader(fragmentShader);
        sphere.material.needsUpdate = true;
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


    /* toggleAnimation() {

        isAnimated = !isAnimated;

        if (isAnimated) {
            console.log("Animation starting")
            loop.start();
        } else {
            console.log("Animation stopping")
            loop.stop();
        }

    } */

}

export { World };

