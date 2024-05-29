import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from '../systems/setupModel';

let monsterData;

async function loadMonster() {
    let loader = new GLTFLoader();

    loader.load('rock_puncher/scene.gltf', function (gltf) {console.log(gltf)});

    monsterData = loader.load();

    console.log(monsterData);

    let monster = setupModel(monsterData);

    return monster;

};

export { loadMonster };