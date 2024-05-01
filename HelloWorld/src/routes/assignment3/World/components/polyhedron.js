/* import { PolyhedronGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';


function createPolyhedron() {

    const geometry = new PolyhedronGeometry(faces, vertices, 1, 0);
    const material = new MeshStandardMaterial({ color: 0x6c26d4 });
    const polyhedron = new Mesh(geometry, material);
    const radiansPerSecond = MathUtils.degToRad(30);

    polyhedron.tick = (delta) => {
        polyhedron.rotation.x += radiansPerSecond * delta;
    };

    return polyhedron;

}

export { createPolyhedron }; */