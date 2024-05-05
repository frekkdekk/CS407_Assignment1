import { createCamera } from './components/camera.js';
import { createDirectionalLight, createAmbientLight } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createTorus } from './components/torus.js';
import { createTetrahedron } from './components/tetrahedron.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';

let camera, renderer, scene, loop;

let torus, tetraOne, tetraTwo;

let directionalLight, ambientLight;

let isAnimated;

class World {
    constructor(container) {

        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();

        isAnimated = true;

        container.append(renderer.domElement);

        torus = createTorus();
        tetraOne = createTetrahedron();
        tetraTwo = createTetrahedron();

        tetraOne.position.x = -3;
        tetraTwo.position.x = 3;

        torus.add(tetraOne, tetraTwo);

        loop = new Loop(camera, scene, renderer);

        loop.updatables.push(torus);
        loop.updatables.push(tetraOne);
        loop.updatables.push(tetraTwo);

        directionalLight = createDirectionalLight();
        ambientLight = createAmbientLight();

        scene.add(torus, directionalLight, ambientLight);

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
        torus.material.color.set(color);
        cone.material.color.set(color);
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

