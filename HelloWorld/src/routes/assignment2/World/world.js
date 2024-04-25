import { createCamera } from './components/camera.js';
import { createOctohedron } from './components/octohedron.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { WireframeGeometry } from 'three';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);

        const octohedron = createOctohedron();
        const light = createLights();

        scene.add(octohedron, light);

        const resizer = new Resizer(container, camera, renderer);
    }


    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }


    toggleWireframe() {
        const wireframe = new WireframeGeometry(octohedron)
    }

}

export { World };
