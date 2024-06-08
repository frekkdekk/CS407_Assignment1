import { ConeGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

let standardMaterial = new MeshStandardMaterial({color: "#F0E68C"});

function createCone() {
    const geometry = new ConeGeometry(7, 5);
    const cone = new Mesh(geometry, standardMaterial);

    const radiansPerSecond = MathUtils.degToRad(30);

    cone.position.z = -10;
    cone.position.x = 6;

    cone.rotation.set(3, -1, 7);

    cone.tick = (delta) => {
        cone.rotation.y -= radiansPerSecond * delta;
    }

    return cone;
}

export { createCone }