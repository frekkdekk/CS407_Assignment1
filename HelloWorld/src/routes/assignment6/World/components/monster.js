import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from '../systems/setupModel';

let monsterData;

function loadMonster() {
    return new Promise((resolve, reject) => {
        let loader = new GLTFLoader();
        let speed = 0.01;

        loader.load(
            'Cube World Kit-glb/Cube Guy Character.glb',
            function (gltf) {
                console.log(gltf);
                monsterData = gltf;
                let monster = setupModel(monsterData);
                resolve(monster);
            },
            undefined,
            function (error) {
                console.error('An error occurred while loading the model:', error);
                reject(error);
            }
        );

 /*        monster.tick = (delta) => {
            if (this.keys.w) this.model.position.z -= this.speed * delta;
            if (this.keys.a) this.model.position.x -= this.speed * delta;
            if (this.keys.s) this.model.position.z += this.speed * delta;
            if (this.keys.d) this.model.position.x += this.speed * delta;
        }; */
    });
}

export { loadMonster };