import { PolyhedronGeometry, Mesh, MeshToonMaterial, MathUtils } from 'three';

let material = new MeshToonMaterial({ wireframe: false });

function createPolyhedron(vertices, indices) {
    const geometry = new PolyhedronGeometry(vertices, indices, 8, 1);
    const poly = new Mesh(geometry, material);

    const radiansPerSecond = MathUtils.degToRad(30);

    poly.tick = (delta) => {
        poly.rotation.x -= radiansPerSecond * delta;
        poly.rotation.y += radiansPerSecond * delta;
    }

    return poly;
}

export { createPolyhedron }