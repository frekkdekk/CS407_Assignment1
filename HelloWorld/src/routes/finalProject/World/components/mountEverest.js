import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function loadMtEverest() {

    return new Promise((resolve, reject) => {

        let loader = new GLTFLoader();
        
        loader.load(
            'mt_everest.glb', (gltf) => {
                let everest = gltf.scene.children[0];

                everest.tick = () => {
                    //everest.position.z += 0.07;
                };

                console.log("everest Model: ", everest);

                resolve( everest );
            }
        );
    });
}

export { loadeverest };