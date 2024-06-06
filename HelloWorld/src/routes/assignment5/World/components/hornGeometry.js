import { BufferGeometry, Mesh, MeshPhongMaterial, MathUtils, BufferAttribute, MeshStandardMaterial, DoubleSide } from 'three';

const vertices = [
    6, 6, 0,      //0 Base 12x12
    -6, 6, 0,     //1
    -6, -6, 0,    //2
    6, -6, 0,     //3

    4, 4, 15,     //4 Stump 8x8
    -4, 4, 15,    //5
    -4, -4, 15,   //6
    4, -4, 15,    //7

    2, 6, 25,     //8 Neck 4x4
    -2, 6, 25,    //9
    -2, 2, 25,    //10
    2, 2, 25,     //11

    0, 10, 31     //12 Tail
];

const indices = [
    3, 0, 1,
    1, 2, 3,

    3, 7, 4,
    4, 0, 3,   //Base
    0, 4, 5,
    5, 1, 0,
    5, 6, 2,
    2, 1, 5,
    6, 7, 3,
    3, 2, 6,

    7, 11, 8,
    8, 4, 7,  //Neck
    8, 9, 5,
    5, 4, 8,
    9, 10, 6,
    6, 5, 9,
    10, 11, 7,
    7, 6, 10,

    11, 12, 8,        //Tail
    8, 12, 9,
    9, 12, 10,
    10, 12, 11
];

// These POS colors were the only reason I couldn't get per-vertex colors.
/* const colors = new Float32Array([
    222, 58, 47,    // 0
    222, 58, 47,    // 1
    222, 58, 47,    // 2
    222, 58, 47,    // 3
    61, 47, 222,    // 4
    61, 47, 222,    // 5
    61, 47, 222,    // 6
    61, 47, 222,    // 7
    58, 222, 47,    // 8
    58, 222, 47,    // 9
    58, 222, 47,    // 10
    58, 222, 47,    // 11
    187, 47, 222    // 12
]); */

// I gave chatGPT my colors and it gave me this (normalized I think): 
const gptColors = new Float32Array([
    222 / 255, 58 / 255, 47 / 255,    // 0
    222 / 255, 58 / 255, 47 / 255,    // 1
    222 / 255, 58 / 255, 47 / 255,    // 2
    222 / 255, 58 / 255, 47 / 255,    // 3
    61 / 255, 47 / 255, 222 / 255,    // 4
    61 / 255, 47 / 255, 222 / 255,    // 5
    61 / 255, 47 / 255, 222 / 255,    // 6
    61 / 255, 47 / 255, 222 / 255,    // 7
    58 / 255, 222 / 255, 47 / 255,    // 8
    58 / 255, 222 / 255, 47 / 255,    // 9
    58 / 255, 222 / 255, 47 / 255,    // 10
    58 / 255, 222 / 255, 47 / 255,    // 11
    187 / 255, 47 / 255, 222 / 255    // 12
]);

function createHorn() {

    const matProps = {
        color: 0xffffff,
        flatShading: true,
        vertexColors: true,
        shininess: 0,
        wireframe: false
    };

    const vfa = new Float32Array(vertices);

    const material = new MeshPhongMaterial(matProps);

    const geometry = new BufferGeometry();

    geometry.setAttribute('position', new BufferAttribute(vfa, 3))
    geometry.setIndex(indices)

    geometry.setAttribute('color', new BufferAttribute(gptColors, 3))

    material.flatShading = true;
    material.vertexColors = true;
    material.shininess = 0;
    material.side = DoubleSide;

    const horn = new Mesh(geometry, material);

    horn.receiveShadow = true;

    const radiansPerSecond = MathUtils.degToRad(10);

    horn.tick = (delta) => {
        horn.rotation.y += radiansPerSecond * delta;
    }

    return horn;
}

export { createHorn }
