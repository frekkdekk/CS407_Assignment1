import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';

let camera;
let scene;
let renderer;
let cube;

class World {
    constructor(container) {

        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();

        container.append(renderer.domElement);

        cube = createCube();

        scene.add(cube);

        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }

    animate = () => {
        requestAnimationFrame( this.animate );
    
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    
        renderer.render( scene, camera );   
    }

}

export { World };
