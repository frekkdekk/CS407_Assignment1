import { BufferGeometry, Mesh, MeshPhongMaterial, MathUtils, BufferAttribute, MeshStandardMaterial, DoubleSide } from 'three';

const vertices = [
    0, 0, 0,    // 1 - N1
    6, 0, 0,    // 2
    6, 0, 6,    // 3
    0, 0, 6,    // 4

    1, 15, 1,   //5 - N2
    5, 15, 1,   //6
    5, 15, 5,   //7
    1, 15, 5,   //8

    3, 17, 3    //9
];

const indices = [
    0, 1, 2,
    2, 3, 0,

    0, 1, 5,
    5, 4, 0,

    1, 2, 6,
    6, 5, 1,

    2, 3, 7,
    7, 6, 2,

    3, 0, 4,
    4, 7, 3,

    5, 8, 4,
    6, 8, 5,
    7, 8, 6,
    4, 8, 7
];

function createObelisk() {

    const materialProps = {
        color: 0x8b0000,
        wireframe: false,
        shininess: 0.5,
        roughness: 0.7
    };

    const vfa = new Float32Array(vertices);

    const material = new MeshStandardMaterial(materialProps);

    const geometry = new BufferGeometry();

    geometry.setAttribute('position', new BufferAttribute(vfa, 3))
    geometry.setIndex(indices)

    material.side = DoubleSide;

    const obelisk = new Mesh(geometry, material);

    obelisk.receiveShadow = true;
    obelisk.castShadow = true;

    const radiansPerSecond = MathUtils.degToRad(30);

    obelisk.tick = (delta) => {
        obelisk.rotation.y += radiansPerSecond * delta;
    }

    return obelisk;
}

export { createObelisk }
