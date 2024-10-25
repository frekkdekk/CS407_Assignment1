import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function loadSkull() {

    return new Promise((resolve, reject) => {

        let loader = new GLTFLoader();
        
        loader.load(
            'skull-glb/source/skullr.glb', (gltf) => {
                let skull = gltf.scene.children[0];

                skull.scale.set(20, 20, 20);
                skull.position.set(0, 10, -60);

                skull.castShadow = true;

                skull.tick = () => {
                    skull.position.z += 0.07;
                };

                //console.log("Skull Model: ", skull);

                resolve( skull );
            }
        );
    });
}

export { loadSkull };