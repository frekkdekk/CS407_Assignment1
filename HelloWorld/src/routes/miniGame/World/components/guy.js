import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Object3D, AnimationMixer, Vector3 } from 'three';

let guy;

function loadGuy() {

    return new Promise((resolve, reject) => {

        const loader = new GLTFLoader();

        const direction = new Vector3(0, 0, 0);
        const moveSpeed = 0.1;
        
        loader.load('Cube World Kit-glb/Cube Guy Character.glb', (gltf) => {

            console.log("Guy Data: ", gltf);

            guy = gltf.scene.children[0];
            const mixer = new AnimationMixer(guy);

            const actions = {
                idle: { action: mixer.clipAction(gltf.animations[3]), flag: true},
                jump: { action: mixer.clipAction(gltf.animations[6]), flag: false},
                attack: { action: mixer.clipAction(gltf.animations[10]), flag: false},
                run: { action: mixer.clipAction(gltf.animations[11]), flag: false},
                walk: { action: mixer.clipAction(gltf.animations[14]), flag: false},
            };

            guy.tick = (delta) => {
                mixer.update(delta); // Update the animation mixer
                const moveDirection = direction.clone().normalize();
                guy.position.add(moveDirection.multiplyScalar(moveSpeed)); // Update position

                // Rotate to face the direction of movement
                if (moveDirection.length() > 0) {
                    const angle = Math.atan2(moveDirection.x, moveDirection.z);
                    guy.rotation.y = angle; // Rotate to face movement direction
                }

                // Play appropriate animations based on movement
                for (const key in actions) {
                    actions[key].flag ? actions[key].action.play() : actions[key].action.stop();
                }
            };

            guy.castShadow = true;

            // target for optional camera focus
            const target = new Object3D();
            target.name = "cameraTarget";
            target.position.set(0, 5, 8);
            guy.add(target);

            resolve(({ guy, actions }));
            }
        ), undefined, reject;
    });
}

export { loadGuy, direction };