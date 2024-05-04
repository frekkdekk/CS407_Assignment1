import { TetrahedronGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

let standardMaterial = new MeshStandardMaterial({color: "#800080"});

function createTetrahedron() {
    const geometry = new TetrahedronGeometry();
    const tetra = new Mesh(geometry, standardMaterial);

    const radiansPerSecond = MathUtils.degToRad(30);

    tetra.tick = (delta) => {
        tetra.rotation.y -= radiansPerSecond * delta;
    }

    return tetra;
}

export { createTetrahedron }