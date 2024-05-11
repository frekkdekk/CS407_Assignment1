import { TetrahedronGeometry, Mesh, MeshNormalMaterial, MathUtils } from 'three';

let material = new MeshNormalMaterial({ wireframe: false });

function createTetrahedron() {
    const geometry = new TetrahedronGeometry(2, 2);
    const tetra = new Mesh(geometry, material);

    const radiansPerSecond = MathUtils.degToRad(30);

    tetra.tick = (delta) => {
        tetra.rotation.x -= 0.03 * Math.sin(20);
    }

    return tetra;
}

export { createTetrahedron }