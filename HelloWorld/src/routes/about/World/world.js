import { createCamera } from './components/camera.js';
import { createDirectionalLight, createAmbientLight } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createText } from './components/text.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';

let camera, renderer, scene, loop;

let text;

let directionalLight, ambientLight;

let isAnimated;

class World {
    constructor(container) {

        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();

        isAnimated = true;

        container.append(renderer.domElement);

        text = createText("Productivity Secret");

        loop = new Loop(camera, scene, renderer);

        loop.updatables.push(text);

        directionalLight = createDirectionalLight();
        ambientLight = createAmbientLight();

        scene.add(text, directionalLight, ambientLight);

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
        text.material.color.set(color);
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

