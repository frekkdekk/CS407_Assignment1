import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from '../systems/setupModel';
import { Object3D } from 'three';

function loadGuy() {

    return new Promise((resolve, reject) => {

        let loader = new GLTFLoader();
        
        loader.load('Cube World Kit-glb/Cube Guy Character.glb', (gltf) => {

            console.log("Guy Data: ", gltf);

            const {guy, actions} = setupModel(gltf);

            guy.castShadow = true;

            // target for optional camera focus
            const target = new Object3D();
            target.position.set(0, 5, 8);
            guy.add(target);

            resolve(({ guy, actions }));
            }
        ), undefined, reject;
    });
}

export { loadGuy };