import { BufferGeometry, Mesh, MeshToonMaterial, MathUtils, BufferAttribute } from 'three';



let vertices = new Float32Array([
    6,6,0,      //0
    -6,6,0,     //1
    -6,-6,0,    //2
    6,-6,0,     //3

    4,4,15,     //4
    -4,4,15,    //5
    -4,-4,15,   //6
    4,-4,15,    //7

    2,6,25,     //8
    -2,6,25,    //9
    -2,2,25,    //10
    2,2,25,     //11

    0,10,31     //12
]);

let indices = new Uint16Array([
    2,3,0, 2,0,1,       //base

    3,7,4, 3,4,0,       //large right
    0,4,5, 0,5,1,       //large top
    1,5,6, 1,6,2,       //large left
    2,6,7, 2,7,3,       //large bottom

    7,11,8, 7,8,4,      //medium right
    4,8,9, 4,9,5,       //medium top
    5,9,10,5,10,6,      //medium left
    6,10,11, 6,11,7,    //medium bottom

    8,12,9,         //tail top
    9,12,10,        //tail left
    10,12,11,       //tail bottom
    11,12,8         //tail right
]);

let colors = new Uint16Array([
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
    187, 47, 222,   // 12
]);

let material;

function createBufferGeometry() {

    material = new MeshToonMaterial({ vertexColors: true });

    const geometry = new BufferGeometry();

    geometry.setAttribute('position', new BufferAttribute(vertices, 3));
    geometry.setIndex(new BufferAttribute(indices, 1));

    const buff = new Mesh(geometry, material);

    const radiansPerSecond = MathUtils.degToRad(30);

    buff.tick = (delta) => {
        /* buff.rotation.x -= radiansPerSecond * delta;
        buff.rotation.y += radiansPerSecond * delta; */
    }

    return buff;
}

export { createBufferGeometry }

