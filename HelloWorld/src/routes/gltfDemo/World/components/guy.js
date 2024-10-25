import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from '../systems/setupModel';

function loadGuy() {

    return new Promise((resolve, reject) => {

        let loader = new GLTFLoader();
        
        loader.load('Cube World Kit-glb/Cube Guy Character.glb', (gltf) => {

            console.log("Guy Data: ", gltf);

            const {guy, actions} = setupModel(gltf);

            guy.castShadow = true;

            resolve(({ guy, actions }));
            }
        ), undefined, reject;
    });
}

export { loadGuy };