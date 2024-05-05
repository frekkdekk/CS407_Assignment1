import { TetrahedronGeometry, Mesh, MeshNormalMaterial, MathUtils } from 'three';

let material = new MeshNormalMaterial({ wireframe: true });

function createTetrahedron() {
    const geometry = new TetrahedronGeometry(2, 5);
    const tetra = new Mesh(geometry, material);

    const radiansPerSecond = MathUtils.degToRad(30);

    tetra.tick = (delta) => {
        /* tetra.position.x += 0.03 * Math.cos(20);
        tetra.position.y += 0.03 * Math.sin(20); */
        tetra.rotation.x += 0.03 * Math.sin(20);
    }

    return tetra;
}

export { createTetrahedron }