import { createCamera } from './components/camera.js';
import { createDirectionalLight, createAmbientLight } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createBufferGeometry } from './components/bufferGeometry.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';
import { createControls } from './systems/controls.js';

let isAnimated = true;

let camera, renderer, scene, loop;

let directionalLight, ambientLight;

let buff, cyl, sphere;

class World {
    constructor(container) {

        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();

        buff = createBufferGeometry();

        container.append(renderer.domElement);

        const controls = createControls(camera, renderer.domElement);

        controls.target.set(1, 2, 3)

        loop = new Loop(camera, scene, renderer);

        loop.updatables.push(buff);

        directionalLight = createDirectionalLight();
        ambientLight = createAmbientLight();

        scene.add(buff, directionalLight, ambientLight);

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
        //buff.material.color.set(color);
        renderer.render(scene, camera);
    }

    toggleAmbientLight() {
        let k;
        k = ambientLight.intensity ? 0 : 7;
        ambientLight.intensity = k;
        renderer.render(scene, camera);
    }

}

export { World };

